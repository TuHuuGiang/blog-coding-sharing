import Header from "../../components/header";
import PostTop from "../../components/contents/postTop/postTop";
import PostRecent from "../../components/contents/postTop/postRecent";

export default function HomePage() {
    return (
        <>
            <Header/>
            <PostTop/>
            <PostRecent/>
        </>
    );
}