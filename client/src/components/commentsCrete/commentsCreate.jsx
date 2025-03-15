import commentsService from "../../services/commentsService.js";

export default function CommentsCreate({ email, gameId, onCrete }) {

    const commentAction = async (formData) => {
        const comment = formData.get('comment');

        const createdComment = await commentsService.crete(email, gameId, comment);

        onCrete(createdComment);
    };

    return (
        <article className="create-comment">
            <label>Add new comment:</label>
            <form className="form" action={commentAction}>
                <textarea name="comment" placeholder="Comment......"></textarea>
                <input className="btn submit" type="submit" value="Add Comment" />
            </form>
        </article>
    );
}