#!/bin/bash

command_exists() {
    command -v "$1" >/dev/null 2>&1
}

install_netdata() {
    echo "Installing Netdata..."
    curl -sSL https://my-netdata.io/kickstart.sh >/tmp/netdata-kickstart.sh &&
        sh /tmp/netdata-kickstart.sh --stable-channel --disable-telemetry --claim-token CLAIMTOKEN --claim-rooms ROOMID --claim-url https://app.netdata.cloud ||
        { echo "Error installing Netdata. Exiting."; exit 1; }
}

install_cloudflared() {
    echo "Installing Cloudflared..."
    curl -sSL --output cloudflared.deb https://github.com/cloudflare/cloudflared/releases/latest/download/cloudflared-linux-amd64.deb &&
        sudo dpkg -i cloudflared.deb &&
        sudo cloudflared service install CLOUDTOKEN ||
        { echo "Error installing Cloudflared. Exiting."; exit 1; }
}

if ! command_exists "netdata"; then
    install_netdata
fi

if ! command_exists "cloudflared"; then
    install_cloudflared
fi

if ! pgrep -x "netdata" >/dev/null; then
    echo "Netdata is not running. Exiting."
    exit 1
fi

if ! pgrep -x "cloudflared" >/dev/null; then
    echo "Cloudflared is not running. Exiting."
    exit 1
fi

echo "Both Netdata and Cloudflared are installed and running."
