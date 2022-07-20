import Header from "../../components/header";
import PostTop from "../../components/contents/postTop/postTop";
import PostRecent from "../../components/contents/postTop/postRecent";
import PostMainContainer from "../../components/contents/postTop/postMain";
import PostFeatured from "../../components/contents/postFeatured";
import MostRead from "../../components/contents/postMostRead";
import Footer from "../../components/footer";

export default function HomePage() {
    return (
        <>
            <Header/>
            <PostTop/>
            <PostRecent/>
            <PostMainContainer/>
            <PostFeatured/>
            <MostRead/>
            <Footer/>
        </>
    );
}