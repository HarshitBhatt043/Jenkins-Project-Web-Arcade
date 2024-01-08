#!/bin/bash

command_exists() {
    command -v "$1" >/dev/null 2>&1
}

install_docker() {
    conflicting_packages=("docker.io" "docker-doc" "docker-compose" "docker-compose-v2" "podman-docker" "containerd" "runc")
    for pkg in "${conflicting_packages[@]}"; do
        sudo apt-get remove -y "$pkg"
    done

    sudo apt update && sudo apt upgrade -y
    sudo apt-get install -y ca-certificates curl gnupg
    sudo install -m 0755 -d /etc/apt/keyrings
    curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg
    sudo chmod a+r /etc/apt/keyrings/docker.gpg

    echo \
        "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu \
      $(. /etc/os-release && echo "$VERSION_CODENAME") stable" |
        sudo tee /etc/apt/sources.list.d/docker.list >/dev/null
    sudo apt-get update

    sudo apt-get install -y docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin ||
        {
            echo "Error installing Docker. Exiting."
            exit 1
        }

}

install_netdata() {
    echo "Installing Netdata..."
    curl -sSL https://my-netdata.io/kickstart.sh >/tmp/netdata-kickstart.sh &&
        sh /tmp/netdata-kickstart.sh --stable-channel --disable-telemetry --claim-token CLAIMTOKEN --claim-rooms ROOMID --claim-url https://app.netdata.cloud ||
        {
            echo "Error installing Netdata. Exiting."
            exit 1
        }
}

install_cloudflared() {
    echo "Installing Cloudflared..."
    curl -sSL --output cloudflared.deb https://github.com/cloudflare/cloudflared/releases/latest/download/cloudflared-linux-amd64.deb &&
        sudo dpkg -i cloudflared.deb &&
        sudo cloudflared service install CLOUDTOKEN ||
        {
            echo "Error installing Cloudflared. Exiting."
            exit 1
        }
}

if ! command_exists "docker"; then
    if [ "$EUID" -eq 0 ]; then
        install_docker
    elif sudo -n true 2>/dev/null; then
        install_docker
        sudo usermod -aG docker $USER
    else
        echo "Docker install needs passwordless sudo access. Aborting."
        exit 1
    fi
fi

if ! command_exists "netdata"; then
    install_netdata
fi

if ! command_exists "cloudflared"; then
    if [ "$EUID" -eq 0 ]; then
        install_cloudflared
    elif sudo -n true 2>/dev/null; then
        install_cloudflared
    else
        echo "Cloudflared install needs passwordless sudo access. Aborting."
        exit 1
    fi
fi

if ! pgrep -x "dockerd" >/dev/null; then
    echo "Docker is not running. Exiting."
    exit 1
fi

if ! pgrep -x "netdata" >/dev/null; then
    echo "Netdata is not running. Exiting."
    exit 1
fi

if ! pgrep -x "cloudflared" >/dev/null; then
    echo "Cloudflared is not running. Exiting."
    exit 1
fi

echo "Docker,Netdata and Cloudflared are installed and running."
