const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.setContent(`
        <html>
            <head>
                <!-- Add Font Awesome CSS link here -->
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">
                <style>
                    body {
                        font-family: Arial, sans-serif;
                        background-color: #f0f0f0;
                        margin: 0;
                        padding: 0;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        height: 100vh;
                    }
                    .container {
                        background-color: #ffffff;
                        border: 2px solid #007bff; /* Adding a border to make it square */
                        border-radius: 10px;
                        padding: 50px; /* Increased padding */
                        text-align: center;
                        width: 500px; /* Increased width to maintain square shape */
                
                
                    }
                    .icon {
                        font-size: 96px; /* Larger icon size */
                        margin-bottom: 20px; /* Increased margin */
                    }
                    .google-icon,
                    .outlook-icon,
                    .onedrive-icon,
                    .dropbox-icon {
                        font-size: 50px; /* Larger icon size */
                        margin: 10px; /* Increased margin */
                    }
                    .instructions {
                        font-size: 36px; /* Larger font size */
                        margin-bottom: 30px; /* Increased margin */
                    }
                    .button {
                        background-color: #007bff;
                        color: #fff;
                        border: none;
                        padding: 20px 40px; /* Increased padding */
                        font-size: 30px; /* Larger font size */
                        border-radius: 5px;
                        text-decoration: none;
                        margin-top: 30px; /* Increased margin */
                        display: inline-block; /* Ensuring proper button width */
                    }
                    .button:hover {
                        background-color: #0056b3;
                    }
                    .copyright {
                        font-size: 18px; /* Larger font size */
                        margin-top: 30px; /* Increased margin */
                        color: #888;
                    }
                </style>
            </head>
            <body>
                <div class="container">
                    <i class="fas fa-box icon google-icon"></i>
                    <p class="instructions">To access product requirements, click the button below:</p>
                    <a href="your link " target="_blank" class="button">Access Product Requirements</a>
                    <div class="icon-links">
                        <i class="fab fa-google google-icon"></i>
                        <i class="fas fa-envelope outlook-icon"></i>
                        <i class="fab fa-windows onedrive-icon"></i>
                        <i class="fab fa-dropbox dropbox-icon"></i>
                    </div>
                    <p class="copyright">&copy; 203 your company . All rights reserved.</p>
                </div>
            </body>
        </html>
    `);

    await page.pdf({
        path: 'output.pdf', // Output PDF file path
        format: 'A4',
        printBackground: true,
    });

    await browser.close();
})();