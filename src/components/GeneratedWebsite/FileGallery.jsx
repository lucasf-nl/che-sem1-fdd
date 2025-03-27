import { useState, useEffect } from "react"

export function FileGallery({ files, setFiles }) {
    // const [files, setFiles] = useState([])
    const [loading, setLoading] = useState(true)

    console.log({files})

    useEffect(() => {
        // const loadFiles = async () => {
        //     try {
        //         const data = await getFiles()
        //         setFiles(data)
        //     } catch (error) {
        //         console.error("Error loading files:", error)
        //     } finally {
        //         setLoading(false)
        //     }
        // }
        //
        // loadFiles()
        //
        // // Set up polling to refresh the file list every 10 seconds
        // const interval = setInterval(loadFiles, 10000)
        // return () => clearInterval(interval)
    }, [])

    const images = files.filter((file) => file.file.type.startsWith("image/"))

    const videos = files.filter((file) => file.file.type.startsWith("video/"))

    return (
        // card
        //  card header
        //   card title
        //  card content
        //   tabs
        //    tabs list
        //     3x tabstrigger
        //    3x tabs content

        <div>
            <div>
                <div>Your Files</div>
            </div>
            <div>
                <div defaultValue="all" className="w-full">
                    <div className="grid w-full grid-cols-3 mb-4">
                        <div value="all">All ({files.length})</div>
                        <div value="images">Images ({images.length})</div>
                        <div value="videos">Videos ({videos.length})</div>
                    </div>

                    <div value="all" className="mt-0">
                        {files.length === 0 ? (
                            <p className="text-center py-8 text-muted-foreground">No files uploaded yet</p>
                        ) : (
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                {files.map((file) => (
                                    // fileitem
                                    <div key={"file_" + file.url} file={file} />
                                ))}
                            </div>
                        )}
                    </div>

                    <div value="images" className="mt-0">
                        {images.length === 0 ? (
                            <p className="text-center py-8 text-muted-foreground">No images uploaded yet</p>
                        ) : (
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                {images.map((file) => (
                                    <div key={"image_" + file.url}><img src={file.media}/></div>
                                ))}
                            </div>
                        )}
                    </div>

                    <div value="videos" className="mt-0">
                        {videos.length === 0 ? (
                            <p className="text-center py-8 text-muted-foreground">No videos uploaded yet</p>
                        ) : (
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {videos.map((file) => (
                                    <div key={"video_" + file.url}><video src={file.media} controls /></div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

