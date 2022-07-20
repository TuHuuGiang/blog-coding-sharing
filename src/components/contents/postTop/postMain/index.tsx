import PostMostRead from "./postMostRead";
import PostMain from "./postMain";

export default function PostMainContainer() {
    return (
        <>
            <div className="container pt-40">
                <div className="post-main-container">
                    <div className="post-main-left">
                        <PostMain/>
                    </div>
                    <div className="post-main-right">
                        <PostMostRead/>
                    </div>
                </div>
            </div>
        </>
    );
}