<h1>👨‍⚕️ Doctor Appointment App</h1>

<p>A mobile application for booking doctor appointments, built with <strong>React Native</strong> and <strong>Expo</strong>, along with a web-based admin panel for managing the appointments and users. The app connects to a backend built with <strong>Node.js</strong>, <strong>Express</strong>, and <strong>MongoDB</strong>, and supports image uploads using <strong>Cloudinary</strong>.</p>

<h2>✨ Features</h2>

<h3>📱 Mobile App:</h3>
<ul>
  <li>🔐 User authentication with <strong>Clerk</strong>.</li>
  <li>📅 Booking doctor appointments.</li>
  <li>📝 Viewing upcoming appointments and history.</li>
  <li>👤 Profile management with Cloudinary image upload.</li>
  <li>💻 Responsive UI built with <strong>NativeWind</strong> (Tailwind for React Native).</li>
  <li>📡 API requests handled by <strong>Axios</strong>.</li>
</ul>

<h3>🖥️ Admin Panel:</h3>
<ul>
  <li>🏗️ Built with <strong>React.js</strong> and <strong>Tailwind CSS</strong> for modern UI.</li>
  <li>📊 Admin can manage appointments and users.</li>
  <li>🔗 Connects to the same backend and database as the mobile app.</li>
</ul>

<h2>🛠️ Tech Stack</h2>

<h3>Frontend (Mobile):</h3>
<ul>
  <li><strong>React Native</strong>: For building the mobile app.</li>
  <li><strong>Expo</strong>: Simplifies React Native development and deployment.</li>
  <li><strong>NativeWind</strong>: Tailwind CSS in React Native for styling.</li>
  <li><strong>Clerk</strong>: Handles authentication and user management.</li>
  <li><strong>Axios</strong>: For making API requests to the backend.</li>
</ul>

<h3>Admin Panel:</h3>
<ul>
  <li><strong>React.js</strong>: For building the web-based admin panel.</li>
  <li><strong>Tailwind CSS</strong>: Utility-first CSS framework for styling.</li>
  <li><strong>Axios</strong>: For API requests to the backend.</li>
</ul>

<h3>Backend:</h3>
<ul>
  <li><strong>Node.js</strong>: JavaScript runtime for the server-side application.</li>
  <li><strong>Express</strong>: Web framework for Node.js.</li>
  <li><strong>MongoDB</strong>: NoSQL database for storing user and appointment data.</li>
  <li><strong>Cloudinary</strong>: For handling image uploads (e.g., profile pictures).</li>
</ul>

<h2>🚀 Live Demo</h2>

<p>Check out the <strong>admin panel</strong> live here: <a href="https://your-admin-panel-link.com" target="_blank">Admin Panel Live Link</a></p>

<h2>🖼️ Screenshots</h2>

<p>Mobile App:</p>

![Screenshot 2024-10-04 074854](https://github.com/user-attachments/assets/aaf9b49f-68cb-497e-8d20-460c9c9c775b)

![Screenshot 2024-10-03 181103](https://github.com/user-attachments/assets/d8246706-d174-4e67-a683-73d1371892ce)

![Screenshot 2024-10-04 071005](https://github.com/user-attachments/assets/fd5f46ad-7810-481d-b1fc-b811305c17dd)

![Screenshot 2024-10-04 071035](https://github.com/user-attachments/assets/5fc00c30-7a04-49a0-8786-f8e3e35f5822)

![Screenshot 2024-10-04 071049](https://github.com/user-attachments/assets/5cfae095-f69b-422f-a718-8de7c08f194e)

![Screenshot 2024-10-04 071115](https://github.com/user-attachments/assets/39cb2acb-e018-4472-bb49-9d3db770a0aa)

![Screenshot 2024-10-04 071132](https://github.com/user-attachments/assets/34524a12-928a-4b90-95dc-03fb42a5b7d5)

![Screenshot 2024-10-04 071153](https://github.com/user-attachments/assets/cbe28506-1c3d-4e97-977b-9112dc3133ef)

![Screenshot 2024-10-04 071212](https://github.com/user-attachments/assets/26d50f8b-8b13-45dc-bcc2-b7ed48371e11)


<h2>📋 Installation</h2>

<h3>Prerequisites:</h3>
<ul>
  <li>Node.js and npm installed.</li>
  <li>Expo CLI installed globally: <code>npm install -g expo-cli</code></li>
</ul>

<h3>Backend Setup:</h3>
<ol>
  <li>Clone the repository:</li>
  <pre><code>git clone https://github.com/your-username/doctor-appointment-app.git
cd doctor-appointment-app/backend</code></pre>
  <li>Install backend dependencies:</li>
  <pre><code>npm install</code></pre>
  <li>Set up environment variables (create a <code>.env</code> file):</li>
  <pre><code>MONGO_URI=your-mongodb-uri
CLOUDINARY_CLOUD_NAME=your-cloud-name
CLOUDINARY_API_KEY=your-api-key
CLOUDINARY_API_SECRET=your-api-secret
JWT_SECRET=your-jwt-secret</code></pre>
  <li>Start the backend server:</li>
  <pre><code>npm start</code></pre>
</ol>

<h3>Mobile App Setup:</h3>
<ol>
  <li>Navigate to the mobile app directory:</li>
  <pre><code>cd ../mobile</code></pre>
  <li>Install mobile dependencies:</li>
  <pre><code>npm install</code></pre>
  <li>Start the Expo development server:</li>
  <pre><code>expo start</code></pre>
</ol>

<h3>Admin Panel Setup:</h3>
<ol>
  <li>Navigate to the admin panel directory:</li>
  <pre><code>cd ../admin</code></pre>
  <li>Install admin panel dependencies:</li>
  <pre><code>npm install</code></pre>
  <li>Start the admin panel:</li>
  <pre><code>npm start</code></pre>
</ol>

<h2>🗂️ Folder Structure</h2>

<pre><code>
doctor-appointment-app/
│
├── backend/              # Node.js & Express backend
├── mobile/               # React Native & Expo mobile app
├── admin/                # React.js admin panel
└── README.md             # Project documentation
</code></pre>

<h2>🤝 Contributing</h2>

<p>Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.</p>

<h2>📄 License</h2>

<p>This project is licensed under the MIT License.</p>
