# github-actions-first-flight
The starting point for our exciting journey into Continuous Integration and Continuous Deployment (CI/CD). This repository serves as the heart of our automation efforts, streamlining the development, testing, and deployment processes using github actions.

## Installing Nginx on Amazon Linux

```
sudo dnf update -y
sudo dnf install nginx -y
sudo systemctl start nginx
sudo systemctl enable nginx
```

### Make changes in the following file for changing nginx configuration

```
sudo vi /etc/nginx/nginx.conf
```

### Sample code which is added for port forwarding requests 

```
location /jenkins/ {
    proxy_set_header   X-Forwarded-For $remote_addr;
    proxy_set_header   Host $http_host;
    proxy_pass         "http://127.0.0.1:3000/";
}
```

#### NOTE: https://awswithatiq.com/how-to-install-nginx-in-amazon-linux-2023/