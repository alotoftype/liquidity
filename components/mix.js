import css from '../sass/styles.scss'

export default (props) => (
  <div className={css.mix}>
    <p>{props.title}</p>
  </div>
)