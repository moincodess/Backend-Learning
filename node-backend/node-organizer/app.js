const fs = require('fs/promises');
const path = require('path');



async function analyzerFolder() {

    const folderPath = process.argv[2];

    
        try {
            const files = await fs.readdir(folderPath, {
                withFileTypes: true
            });

            let totalFiles = 0;
            let pdfCount = 0;
            let videoCount = 0;
            let imageCount = 0;
            let CodeCount = 0;
            let textCount = 0;
            let otherCount = 0;

            for (const element of files) {

      


                if (!element.isFile()) {
                    continue;
                }

                const extension = path.extname(element.name).toLowerCase();
                console.log("FILE", element.name);

                if (extension === ".pdf") {
                    pdfCount++;
                } else if (
                    [".png", ".jpg", ".jpeg", ".gif", ".webp"].includes(extension)
                ) {
                    imageCount++;
                } else if (extension === ".mp4") {
                    videoCount++;
                } else if (
                    [".md", ".docx", ".txt"].includes(extension)
                ) {
                    textCount++;
                } else if (
                    [".jsx", ".html"].includes(extension)
                ) {
                    CodeCount++;
                } else {
                    otherCount++;
                }

                totalFiles = Number(CodeCount +otherCount +videoCount +pdfCount +imageCount +textCount) ;

            } console.log("\n===== FOLDER REPORT =====");
            console.log(`Images: ${imageCount}`);
            console.log(`PDFs: ${pdfCount}`);
            console.log(`Videos: ${videoCount}`);
            console.log(`Code files: ${CodeCount}`);
            console.log(`Text files: ${textCount}`);
            console.log(`Other files: ${otherCount}`);
            console.log(`Total files: ${totalFiles}`);

        } catch (error) {
            console.error("Could not analyze folder:", error.message);
            process.exitCode = 1;
        }
    }





analyzerFolder();