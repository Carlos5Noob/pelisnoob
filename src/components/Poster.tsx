import styles from './Poster.module.css';

type PosterProps = {
    key?: number;
    children: React.ReactNode;
}

const Poster = ({ children, key }: PosterProps) => {
    return (
        <div key={key} className={`flex flex-col items-center mb-8 ${styles.poster}`}>
            {children}
        </div>
    );
}
export default Poster;
