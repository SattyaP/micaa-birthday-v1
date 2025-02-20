const importAll = (r) => {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
}

const images = importAll(require.context('/', false, /\.(png|jpe?g|svg)$/));

export const Gallery = () => {
    return (
        <div>
            {Object.keys(images).map((key, index) => (
                <img key={index} src={images[key]} alt={key} />
            ))}
        </div>
    );
}