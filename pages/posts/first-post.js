import Link from "next/link";
function firstPost() {
    return (
        <>
            <h1>first-post</h1>
            <h2>
                <Link href="/">Back to Home</Link>
            </h2>
        </>
    )
}

export default firstPost;