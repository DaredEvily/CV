const getRatingStars = (rating) => (
    [...Array(5)].map((circle, i) => {
        const ratingValue = i + 1;
        return (
            <i className={ratingValue <= rating ? "fa-solid fa-circle" : "fa-regular fa-circle"} key={i}></i>
        );
    })
);

export default getRatingStars;
