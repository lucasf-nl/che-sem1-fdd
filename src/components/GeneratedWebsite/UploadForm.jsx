import { useState } from "react"

export function UploadForm({ files, setFiles }) {
    const [file, setFile] = useState(null)
    const [uploading, setUploading] = useState(false)
    // const { toast } = useToast()

    const handleFileChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            setFile(e.target.files[0])
            console.log({f: e.target.files[0]})
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (!file) return

        setFiles([...files, { file, media: URL.createObjectURL(file) }])

        // try {
        //     setUploading(true)
        //     const formData = new FormData()
        //     formData.append("file", file)
        //
        //     await uploadFile(formData)
        //
        //     toast({
        //         title: "Upload successful",
        //         description: `${file.name} has been uploaded.`,
        //     })
        //
        //     setFile(null)
        //     // Reset the file input
        //     const fileInput = document.getElementById("file")
        //     if (fileInput) fileInput.value = ""
        // } catch (error) {
        //     toast({
        //         title: "Upload failed",
        //         description: "There was an error uploading your file.",
        //         variant: "destructive",
        //     })
        //     console.error("Upload error:", error)
        // } finally {
        //     setUploading(false)
        // }
    }

    return (
        // card
        // cardcontent
        <div className="mb-8">
            <div className="pt-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid w-full items-center gap-4">
                        <div className="flex flex-col space-y-2">
                            <label
                                htmlFor="file"
                                className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-lg cursor-pointer bg-muted/50 hover:bg-muted transition-colors"
                            >
                                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                    {/*<FileUp className="w-8 h-8 mb-2 text-muted-foreground" />*/}
                                    <p className="mb-2 text-sm text-muted-foreground">
                                        <span className="font-semibold">Click to upload</span> or drag and drop
                                    </p>
                                    <p className="text-xs text-muted-foreground">Images (PNG, JPG, GIF) or Videos (MP4)</p>
                                    {file && <p className="mt-2 text-sm font-medium text-primary">Selected: {file.name}</p>}
                                </div>
                                <input
                                    id="file"
                                    type="file"
                                    className="hidden"
                                    accept="image/png, image/jpeg, image/gif, video/mp4"
                                    onChange={handleFileChange}
                                    disabled={uploading}
                                />
                            </label>
                        </div>
                    </div>
                    <button type="submit" className="w-full p-2 rounded bg-gray-400 text-white" disabled={!file || uploading}>
                        {uploading ? (
                            <>
                                {/*<Upload className="mr-2 h-4 w-4 animate-spin" />*/}
                                Uploading...
                            </>
                        ) : (
                            <>
                                {/*<Upload className="mr-2 h-4 w-4" />*/}
                                Upload File
                            </>
                        )}
                    </button>
                </form>
            </div>
        </div>
    )
}

