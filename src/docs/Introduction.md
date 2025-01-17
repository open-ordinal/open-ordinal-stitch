---
title: Introduction
group: Documents
---

> The documentation is still work in progress. Feedback from developers like you will drive the evolution and completeness of the documentation. Your input is invaluable.

# Introduction

Open Ordinal Stitch is a on-chain JavaScript library and command line tool designed to handle sizable binary data. It addresses the challenge posed by the ~400KB limit enforced by Bitcoin miners, enabling users to split binary files into smaller, manageable parts and stitch them back together seamlessly.

- **JavaScript Library/Module:** A general library you can integrate into own projects and a on-chain stitcher for use in ordinals.

- **On-Chain Library:** Extend the functionality to the blockchain, allowing stitching directly on-chain in your ordinals.

- **Command Line Tool:** Use the command line interface for quick and easy binary file operations without the need for additional coding.

## Split Command

By using the `oostitch split` command you can split a file into multiple smaller parts.

Command
```sh
oostitch split -input ./test/Video.mp4 -output ./test/ -maxsize 350000
```

Input file
```text
Video.mp4 - 900kb
```

Output files
```text
Video-P00.bin - 350kb
Video-P01.bin - 350kb
Video-P02.bin - 200kb
```

## Stitch Command

By using the `oostitch stitch` command you can stitch multiple smaller parts into a single file.

Command
```sh
oostitch stitch -input ./test/Video-* -output ./test/Video-Stitched.mp4
```

Input files
```text
Video-P00.bin - 350kb
Video-P01.bin - 350kb
Video-P02.bin - 200kb
```

Output file
```text
Video-Stitched.mp4 - 900kb
```

## Stitching in Ordinal by Code

This is a small example of how to stitch multiple inscriptions (parts) in a ordinal into one file in memory and assigning it to a video-player.

Ordinal HTML Example
```html
<!DOCTYPE html>
<html>
    <head>
        <title>Video</title>
    </head>
    <body>
        <video id="video" controls></video>
        <script type="module">

            import * as ooST from '/content/<OpenOrdinalStitchInscriptionId>';

            var data = await ooST.stitchAsDataUrl({
                parts: [
                    "VideoPartInscriptionId01",
                    "VideoPartInscriptionId02",
                    "VideoPartInscriptionId03",
                    "VideoPartInscriptionId04",
                    "VideoPartInscriptionId05",
                    "VideoPartInscriptionId06"
                ],
                contentType: "video/mp4"
            });

            let video = document.getElementById("video");
            video.setAttribute("src", data);
            video.play();

        </script>
    </body>
</html>
```

## Stitching in Ordinal by Metadata

This is a small example of how to stitch multiple inscriptions (parts) in a ordinal into one file in memory and assigning it to a video-player. The difference here is that we use the `stitch` protocol using Open Ordinal Metadata.

When you obmit passing the stitch configuration to the function it will look at the `Metadata` and find the configuration for stitching.

Ordinal HTML Example
```html
<!DOCTYPE html>
<html>
    <head>
        <title>Video</title>
    </head>
    <body>
        <video id="video" controls></video>
        <script type="module">

            import * as ooST from '/content/<OpenOrdinalStitchInscriptionId>';

            var data = await ooST.stitchAsDataUrl();

            let video = document.getElementById("video");
            video.setAttribute("src", data);
            video.play();

        </script>
    </body>
</html>
```

Metadata
```json
{
    "stitch": {
        "parts": [
            "VideoPartInscriptionId01",
            "VideoPartInscriptionId02",
            "VideoPartInscriptionId03",
            "VideoPartInscriptionId04",
            "VideoPartInscriptionId05",
            "VideoPartInscriptionId06"
        ],
        "contentType": "video/mp4"
    }
}
```

## Stitching in Ordinal by Sat

This is a small example of how to stitch multiple inscriptions (parts) in a ordinal into one file in memory and assigning it to a video-player. The difference here is that we load all parts from a `sat`. The files need to be inscribed in correct order.

Ordinal HTML Example
```html
<!DOCTYPE html>
<html>
    <head>
        <title>Video</title>
    </head>
    <body>
        <video id="video" controls></video>
        <script type="module">

            import * as ooST from '/content/<OpenOrdinalStitchInscriptionId>';

            var data = await ooST.stitchAsDataUrl({
                sat: SatNumberWherePartsIsLocated,
                contentType: "video/mp4"
            });

            let video = document.getElementById("video");
            video.setAttribute("src", data);
            video.play();

        </script>
    </body>
</html>
```

## Stitching in Ordinal by Parent / Children

This is a small example of how to stitch multiple inscriptions (parts) in a ordinal into one file in memory and assigning it to a video-player. The difference here is that we load all parts (children) from a parent. The files need to be inscribed in correct order.

Ordinal HTML Example
```html
<!DOCTYPE html>
<html>
    <head>
        <title>Video</title>
    </head>
    <body>
        <video id="video" controls></video>
        <script type="module">

            import * as ooST from '/content/<OpenOrdinalStitchInscriptionId>';

            var data = await ooST.stitchAsDataUrl({
                parent: "ParentInscriptionIdThatHavePartsAsChildren",
                contentType: "video/mp4"
            });

            let video = document.getElementById("video");
            video.setAttribute("src", data);
            video.play();

        </script>
    </body>
</html>
```
