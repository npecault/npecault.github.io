export interface HighlightedProps {
    highlight: string
    text: string
}
const Highlighted = ({highlight, text}: HighlightedProps) => {
    const parts = highlight.length > 0 ?
        text.split(new RegExp(`(${highlight})`, 'gi')) :
        [text];

    const nodes = parts
        .filter(x => x !== undefined)
        .map(x => x.toLowerCase() === highlight.toLowerCase() ? <b>{x}</b> : <>{x}</>);

    return <span>{nodes.map((x, index) => <span key={index}>{x}</span>)}</span>
};

export default Highlighted;
