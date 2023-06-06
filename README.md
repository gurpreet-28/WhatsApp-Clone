# WhatsApp Clone

This is a WhatsApp clone built using React and Firebase. It replicates some of the core features of the popular messaging application, allowing users to send messages, create groups, and view real-time updates.

## Features

- User authentication: Users can sign up and log in using their email and password.
- Real-time messaging: Users can send messages to individuals and groups in real-time.
- Group creation: Users can create groups, add members, and have group conversations.
- Media sharing: Users can share images, videos, and other media files in their conversations(not yet added)

## Prerequisites

Before running the application, make sure you have the following installed:

- Node.js: [Download and install Node.js](https://nodejs.org/en/download/) based on your operating system.
- Firebase account: [Create a Firebase account](https://firebase.google.com/) and set up a new project.

## Installation

1. Clone the repository or download the source code:

```
git clone https://github.com/your-username/whatsapp-clone.git
```

2. Navigate to the project directory:

```
cd whatsapp-clone
```

3. Install the dependencies:

```
npm install
```

## Configuration

1. Create a new Firebase project at the [Firebase Console](https://console.firebase.google.com/).

2. Enable the following Firebase services in your project:
   - Authentication
   - Firestore
   - Firebase Storage
   - Firebase Cloud Messaging (for notifications)

3. Obtain the Firebase configuration object for your project by following these steps:
   - Go to your Firebase project settings.
   - Scroll down to the "Your apps" section.
   - Click on the "Web app" option (</>).
   - Register the app by providing a name for it.
   - Copy the generated configuration object.

4. Create a new file `src/firebase.js` in the project directory and paste the Firebase configuration object into it:

```javascript
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

const firebaseConfig = {
  // Paste your Firebase configuration object here
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const storage = firebase.storage();

export default firebase;
```

## Usage

1. Start the development server:

```
npm start
```

2. Open your browser and visit [http://localhost:3000](http://localhost:3000) to see the application running.

## Deployment

To deploy the application to a hosting service, follow the hosting instructions for React applications. Some popular hosting options include Firebase Hosting, Netlify, and Vercel.

Make sure to update the Firebase configuration and environment variables for your production environment.
