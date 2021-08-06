import styles  from"./ProfileInfo.module.css";

const ProfileInfo = () => {
  return (
    <div className={styles.content}>
        <div>
          <img src="https://c.wallhere.com/photos/62/45/1920x1080_px_General-545244.jpg!d"></img>
        </div>
        <div className={styles.ava}>
          ava
        </div>
    </div>
  )
}

export default ProfileInfo;