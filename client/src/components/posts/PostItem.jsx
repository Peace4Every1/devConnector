import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Moment from "react-moment";
import { connect } from "react-redux";

const PostItem = ({
  auth,
  post: { _id, text, name, avatar, user, likes, comments, date }
}) => (
  <div className="posts">
    <div className="post bg-white p-1 my-1">
      <div>
        <a href="profile.html">
          <img className="round-img" src={avatar} alt="" />
          <h4>{name}</h4>
        </a>
      </div>
      <div>
        <p className="my-1">{text}</p>
        <p className="post-date">
          Posted on <Moment format="YYYY/MM/DD">{date}</Moment>
        </p>
        <button type="button" className="btn btn-light">
          <i className="fas fa-thumbs-up" />
          {likes.length > 0 && <span>{likes.length}</span>}
        </button>
        <button type="button" className="btn btn-light">
          <i className="fas fa-thumbs-down" />
        </button>
        <Link to={`/post/${_id}`} className="btn btn-primary">
          Discussion{" "}
          {comments.length > 0 && (
            <span className="comment-count">{comments.length}</span>
          )}
        </Link>
        {!auth.loading && user === auth.user._id && (
          <button type="button" className="btn btn-danger">
            <i className="fas fa-times" />
          </button>
        )}
      </div>
    </div>

    <div className="post bg-white p-1 my-1">
      <div>
        <a href="profile.html">
          <img
            className="round-img"
            src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200"
            alt=""
          />
          <h4>John Doe</h4>
        </a>
      </div>
      <div>
        <p className="my-1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint possimus
          corporis sunt necessitatibus! Minus nesciunt soluta suscipit nobis.
          Amet accusamus distinctio cupiditate blanditiis dolor? Illo
          perferendis eveniet cum cupiditate aliquam?
        </p>
        <p className="post-date">Posted on 04/16/2019</p>
        <button type="button" className="btn btn-light">
          <i className="fas fa-thumbs-up" />
          <span>4</span>
        </button>
        <button type="button" className="btn btn-light">
          <i className="fas fa-thumbs-down" />
        </button>
        <a href="post.html" className="btn btn-primary">
          Discussion <span className="comment-count">3</span>
        </a>
        <button type="button" className="btn btn-danger">
          <i className="fas fa-times" />
        </button>
      </div>
    </div>
  </div>
);

PostItem.propTypes = {
  post: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  {}
)(PostItem);
