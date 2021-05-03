import css from "./Profile.module.css";

const Profile = () => (
  <div className={css.content}>
    <div>
      <img
        className={css.wallpaper}
        src="https://cdn.wallpapersafari.com/37/37/PS5Wvy.jpg"
      ></img>
    </div>
    <div>ava + descr</div>
    <div className={css.posts}>
      my posts
      <div className={css.item}>new post</div>
      <div className={css.item}>Post 1</div>
      <div className={css.item}>Post 2</div>
    </div>
  </div>
);
export default Profile;
