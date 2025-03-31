# Pashu Sewa

![Pashu Sewa Banner](assets/banner.png)

## Project Overview
**Pashu Sewa** is an animal welfare platform designed to help injured and stray animals by enabling users to report cases and donate for their treatment. The platform leverages Web3 technology to reward users with ERC20 tokens for each valid injury report. The project includes both a web and an Android version, ensuring accessibility for a wider audience.

### Problem Solved
Stray and injured animals often do not receive timely care due to a lack of awareness and funding. **Pashu Sewa** addresses this issue by providing a seamless reporting system and encouraging contributions through a transparent and blockchain-backed donation system.

### Key Features
- **Animal Injury Reporting**: Users can report injured animals by uploading images and providing location details.
- **Donations**: People can contribute to the treatment of reported animals.
- **Web3 Integration**: Rewards users with ERC20 tokens for each verified report.
- **User Authentication**: Secure authentication system to prevent spam reports.
- **Admin Dashboard**: Admins can verify reports and track donations.
- **Multi-Platform Support**: Web-based and Android versions for ease of access.

---

## Deployed Link
🔗 [Live Demo](http://pashusewa.netlify.app)

## Video Demo
🎥 [Watch Demo-1](https://drive.google.com/file/d/1DAhWFz6tYYbJPA9pz8D9ozUt23D7qWUj/view?usp=drivesdk)
🎥 [Watch Demo-2](https://drive.google.com/file/d/1mOLAd2-X1DQwDLqEdbraBhbnr4DxM6GY/view?usp=drivesdk) 

---

## Dependencies
Ensure you have the following dependencies installed to run the project:

### Backend (Node.js + Express)
- **Node.js**: 18.x
- **Express**: 4.x
- **MongoDB**: 6.x
- **Mongoose**: 6.x
- **Web3.js**: 1.8.x
- **Dotenv**: 16.x
- **Multer**: 1.4.x (for image uploads)
- **Cloudinary**: 1.32.x (for storing images)

### Frontend (React)
- **React**: 18.x
- **Vite**: 5.x
- **Axios**: 1.x
- **Tailwind CSS**: 3.x
- **React Router**: 6.x

### Mobile (React Native)
- **React Native**: 0.72.x
- **Expo**: 49.x

### Blockchain (Smart Contracts)
- **Solidity**: 0.8.x
- **Hardhat**: 2.x
- **Ethers.js**: 6.x
- **MetaMask Wallet** for testing

---

## Setup Instructions

### 1. Clone the Repository
```sh
git clone https://github.com/Arindamsharma12/PashuSewa-App.git
```

### 2. Backend Setup
```sh
cd backend
npm install
```

#### Environment Variables (.env)
Create a `.env` file in the backend directory and add:
```sh
PORT=8000
MONGO_URI=your_mongodb_connection_string
CLOUDINARY_URL=your_cloudinary_api_url
```

Run the backend server:
```sh
npm start
```

### 3. Frontend Setup
```sh
cd frontend
npm install
npm run dev
```

### 4. Mobile App Setup
```sh
cd mobile
npm install
```

---

## Usage
- **Report an Injury**: Users upload a picture, location, and details.
- **Donate**: People can contribute via UPI, PayPal, or crypto.
- **Earn Tokens**: Verified reports get ERC20 token rewards.
- **Track Reports**: Users can monitor reported cases and donations.

For any issues, feel free to create an issue on GitHub or contact us!

---

## Screenshots
### Home Page
![Home Page](assets/home.png)

### Report Form
![Report Form](assets/report.png)

### AI Powered Injury Detector
![AI Powered Injury Detector](assets/injury.png)

### Signup Form
![Signup Form](assets/signup.png)

### About Page
![About Page](assets/about.png)

### AI Powered Diet Planner
![Diet Plannar](assets/diet.png)

---
# Pashu Sewa - Future Plans

### 1. **Web3 & Blockchain Integration**
- Implement ERC20-based reward tokens for users who report injured animals.
- Introduce a decentralized system for donation tracking and transparency.
- Ensure secure and tamper-proof data storage using blockchain.

### 2. **Mobile App Development**
- Develop an Android application for easy access and real-time reporting.
- Implement geolocation-based tracking for nearby veterinary services.
- Enable push notifications for updates on reported cases and donations.

### 3. **AI & Image Recognition**
- Utilize AI for automatic detection of injured animals from uploaded images.
- Implement a classification system to categorize injuries based on severity.
- Provide automated suggestions for first-aid before professional help arrives.

### 4. **Community & Volunteer Involvement**
- Develop a volunteer network for animal rescue and care.
- Introduce a ranking system for active volunteers with reward-based incentives.
- Organize online and offline campaigns to promote awareness.

### 5. **Donation & Fundraising Enhancements**
- Integrate multiple payment gateways for easy donations.
- Allow users to sponsor treatments for specific animals.
- Provide tax exemption benefits for verified donors.

### 6. **Enhanced Veterinary Support**
- Partner with veterinary clinics and NGOs for efficient treatment.
- Develop an AI-powered chatbot for basic medical guidance.
- Provide a directory of nearby veterinary services with ratings and reviews.

### 7. **Scalability & Expansion**
- Expand services to more cities and rural areas.
- Establish partnerships with government and animal welfare organizations.
- Localize the platform in multiple languages for better accessibility.

## Conclusion
Pashu Sewa aims to bridge the gap between technology and animal welfare. With these planned enhancements, the platform will not only facilitate faster response times but also encourage community involvement in rescuing and caring for animals.

For suggestions or contributions, feel free to contact us!

---
*Pashu Sewa - Empowering Animal Care with Technology*


