---
title: "USF GlobalProtect VPN Linux Installation Guide"
date: "Oct 20, 2023"
updated: "May 17, 2025"
excerpt: "Quick-start guide for installing and using the USF GlobalProtect VPN on Linux distributions including Ubuntu, Fedora, and Arch Linux."
category: "Tech"
subcategory: "Linux"
readTime: ""
slug: "global-protect"
image: ""
---

## Installation
Clone this repo and navigate to the local folder:
```bash
~$ git clone https://github.com/akarez/USF-GlobalProtect.git && cd USF-GlobalProtect/packages/
```
### Ubuntu
For Debian based distributions including Ubuntu, Mint, Kali, Pop!OS etc:

```bash
~$ sudo dpkg -i GlobalProtect_deb-5.1.1.0-17.deb && sudo apt install -f -y
```
### Fedora
For RHEL based distributions including Fedora, CentOS etc:

```bash
~$ sudo rpm -i GlobalProtect_rpm-5.1.1.0-17.rpm
```
### Generic
For the rest of distributions such as Arch, Manjaro, Void etc. use the generic installer script:

```bash
~$ tar xvf GlobalProtect_tar-5.1.1.0-17.tgz && sudo ./install.sh
```
## Setup
Create a new connection and enter your NetID credentials when prompted. You will only run this when setting up the connection to a new portal. After this your credentials and the portal address will be saved for future access:
```bash
~$ globalprotect connect --portal vpn.usf.edu
```
## Usage
Connecting to the portal:
```bash
~$ globalprotect connect
```

Show connection status:
```bash
~$ globalprotect show --status
```

Show connection details:
```bash
~$ globalprotect show --details
```

Restart connection:
```bash
~$ globalprotect rediscover-network
```

Disconnecting from the portal:

```bash
~$ globalprotect disconnect
```
