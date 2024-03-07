#!/bin/bash
project_dir="Jenkins-Project-Web-Arcade/circleci"
appUrl="http://localhost:5000"
maxRetries=3
retryInterval=10
METRICSURL=$1
METRICSID=$2
METRICSPASS=$3

create_prometheus_config() {
    local project_dir=$1
    local prometheus_file="$project_dir/prometheus.yml"

    cat <<EOF > "$prometheus_file"
global:
  scrape_interval: 60s
  external_labels:
    provider: Cloud

scrape_configs:
  - job_name: "netdata"
    metrics_path: "/api/v1/allmetrics"
    params:
      format: [prometheus]
    honor_labels: true
    static_configs:
      - targets: ["localhost:19999"]

remote_write:
  - url: $METRICSURL
    basic_auth:
      username: $METRICSID
      password: $METRICSPASS
#    write_relabel_configs:
#      - source_labels: [chart]
#        regex: ".*anomaly.*|.*context.*|.*fds.*|.*icmp.*|.*ipv6.*|.*fragmentation.*|.*pids.*|.*systemdunits_service-units.unit_.*|.*usergroup.*"        
#        action: drop
EOF
    echo "File prometheus.yml created successfully."
}

deployment() {
    local project_dir=$1
    local compose_file="$project_dir/docker-compose.yml"
    local prometheus_file="$project_dir/prometheus.yml"

    if [ -e "$compose_file" ]; then
        if [ ! -e "$prometheus_file" ]; then
            create_prometheus_config "$project_dir"
        fi

        cd "$project_dir" || exit
        docker compose down
        docker compose pull
        docker compose up -d

        retries=0
        healthy=false

        while [ $retries -lt $maxRetries ]; do
            if curl -sSf "$appUrl" -o /dev/null; then
                healthy=true
                break
            else
                ((retries++))
                sleep "$retryInterval"
            fi
        done

        if [ "$healthy" = true ]; then
            echo 'Health checks passed, the application is healthy'
        else
            echo 'Health checks failed, the application may be unhealthy'
            exit 1
        fi

        docker system prune -af
    else
        git clone --single-branch --depth 1 -b main https://github.com/HarshitBhatt043/Jenkins-Project-Web-Arcade.git
        create_prometheus_config "$project_dir"
        deployment "$project_dir"
    fi
}

deployment "$project_dir"