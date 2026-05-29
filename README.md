# Prerequisite
[node.js](https://nodejs.org/en)

# Start the WebApp
```
yarn
yarn start
```

# Deployment - AWS lightsail

### Instance
`1 GB RAM, 2 vCPUs, 40 GB SSD`

`Static IP : 13.232.53.71`

`Change firewall to accept https traffic HTTPS	TCP	443 Any IPv4 address`

`Install docker to our instance and run containers`

### DNS record

`Domain name : nayanprojects.in`

`DNS record : Added static ip to DNS A record in godaddy. This links our domain name to our static ip of instance.`

### Enable HTTPS

`Install nginx and certbot`
```
sudo apt update

sudo apt install nginx certbot python3-certbot-nginx -y
```

`Configure HTTP first`
```
sudo nano /etc/nginx/sites-available/nayanprojects
```
`Paste`
```
server {
    listen 80;
    server_name nayanprojects.in www.nayanprojects.in;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;

        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
    }
}
```

`Enable it`
```
sudo ln -s /etc/nginx/sites-available/nayanprojects /etc/nginx/sites-enabled/

sudo nginx -t

sudo systemctl restart nginx
```

`Then do this : configure HTTPS and auto redirect HTTP → HTTPS`
```
sudo certbot --nginx -d nayanprojects.in -d www.nayanprojects.in
```

> This generates SSL certificate and store it in `/etc/letsencrypt/live/nayanprojects.in/` as `fullchain.pem` and `privkey.pem` and later use.

