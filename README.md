QRCode-Generator-Interactive:
This project is an interactive QR code generator built using Node.js. By leveraging the power of inquirer, fs, and qr-image modules, the application prompts users to input a URL and generates a corresponding QR code image. The project demonstrates the seamless integration of user input handling, file system operations, and QR code generation.

Features
Interactive Command Line Interface: Utilizes inquirer to prompt users for URL input.
QR Code Generation: Generates a QR code for the input URL using qr-image.
File Operations: Saves the QR code as an image file and the URL as a text file using fs.
Learning Objectives
I am currently learning backend development, and this project is part of my journey to understand and implement various backend technologies and operations. Through this project, I have explored:

Command line interfaces in Node.js
Handling user input interactively
File system operations including reading from and writing to files
Generating and manipulating QR codes
Project Structure
The main functionality is encapsulated in the index.js file

To run this project locally, follow these steps:

Clone the repository:
1. git clone https://github.com/yourusername/QRCode-Generator-Interactive.git
2.cd QRCode-Generator-Interactive
3.Install dependencies:
  npm install inquirer fs qr-image
4.Run the application: nodemon index.js
5.Follow the prompt:

Type in your URL when prompted.
The application will generate a qrImg.png containing the QR code and save the URL in a URL.txt file.
By engaging with this project, I got insights into backend development processes and understand how to integrate various Node.js modules to create a functional application. Thank you for checking out my project!
