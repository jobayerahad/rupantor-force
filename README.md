# Rupantor Force Security Services LTD. – Public Website

This is the official public-facing website for **Rupantor Force Security Services LTD.**, built using [Next.js](https://nextjs.org/). The platform is designed to showcase the organization's services, values, and contact points with a fast, secure, and scalable web experience.

## 🚀 Features

- ⚡ High-performance Next.js frontend
- 🌐 Fully responsive and accessible design
- 🛡️ Secure HTTPS/2 support via NGINX reverse proxy
- ☁️ Optimized for deployment on Ubuntu server
- 📱 Mobile-first experience

---

## 🧑‍💻 Local Development Setup (Windows)

> Follow these steps to run the app on your Windows development machine.

### Prerequisites

- [Node.js (LTS)](https://nodejs.org/) installed (v18.x or higher recommended)
- [Git](https://git-scm.com/)
- [Visual Studio Code](https://code.visualstudio.com/) (optional but recommended)

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/jobayerahad/rupantor-force.git
   cd rupantor-force
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Copy from `.env.example` to `.env` file:**

   ```bash
   cp .env.example .env
   ```

4. **Run the development server:**

   ```bash
   npm run dev
   ```

5. **Visit http://localhost:3000 to view the site in your browser.**

---

## ☁️ Production Deployment (Ubuntu + NGINX + HTTPS/2)

> These steps will help you deploy and host the website securely on a Ubuntu server behind NGINX with HTTPS/2 support.

## Prerequisites

- Ubuntu 22.04+ server (with root access)
- Domain name pointed to your server IP
- Node.js (v18+) installed
- `pm2`, `nginx`, and `certbot` installed

### 1. Clone & Build the Project

```bash
git clone https://github.com/your-organization/rupantor-force-website.git
cd rupantor-force-website
npm install
npm run build
```

### 2. Start with PM2

```bash
npm install -g pm2
pm2 start npm --name "rupantor-site" -- start
pm2 save
pm2 startup
```

### 3. Configure NGINX Reverse Proxy

```bash
sudo nano /etc/nginx/sites-available/rupantor-force
```

Paste this config:

```php
server {
    listen 80;
    server_name rupantorforce.com www.rupantorforce.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

Enable it and restart NGINX:

```bash
sudo ln -s /etc/nginx/sites-available/rupantor-force /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx
```

### 4. Secure with SSL (Let's Encrypt + HTTPS/2)

Install certbot and enable SSL:

```bash
sudo apt update
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d rupantorforce.com -d www.rupantorforce.com
```

Enable automatic renewal:

```bash
sudo systemctl enable certbot.timer
```

---

## 📦 Scripts

| Command         |         Description          |
| --------------- | :--------------------------: |
| `npm run dev`   | Start dev server (localhost) |
| `npm run build` |     Build for production     |
| `npm start`     |   Start production server    |
| `pm2 logs`      |        View PM2 logs         |

---

## 💬 Contact

This project is maintained by the Web Team at Rupantor Force Security Services LTD. For technical issues or deployment help, reach out at [dev@rupantorforce.com](dev@rupantorforce.com)

---

## 🛡️ License

This project is private and proprietary to Rupantor Force Security Services LTD. Unauthorized use, copying, or distribution is strictly prohibited.

> Stay secure, stay professional. This platform reflects our mission: Service with Integrity and Trust.
