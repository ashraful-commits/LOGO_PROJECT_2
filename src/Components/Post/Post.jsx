import styled from "styled-components";
import PostComponent from "../PostComponent/PostComponent";

const Post = () => {
  return (
    <PostContainer>
      <PostComponent />
      <PostComponent />
    </PostContainer>
  );
};
const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 53px;
`;
export default Post;
