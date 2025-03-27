import {UploadForm} from "./UploadForm.jsx";
import {FileGallery} from "./FileGallery.jsx";
import {useState} from "react";

export function HomePageV1() {
    const [files, setFiles] = useState([])

    return <main className="container mx-auto py-10 px-4">
        <h1 className="text-3xl font-bold text-center mb-8">File Upload</h1>
        <div className="max-w-3xl mx-auto">
            <UploadForm files={files} setFiles={setFiles} />
            <FileGallery files={files} setFiles={setFiles} />
        </div>
    </main>
}
