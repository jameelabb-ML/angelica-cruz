import { useReveal } from "../hooks/useReveal";

function Reveal({ as: Tag = "div", delay = 0, className = "", children, ...rest }) {
  const [ref, isVisible] = useReveal();

  return (
    <Tag
      ref={ref}
      className={`reveal ${isVisible ? "is-visible" : ""} ${className}`.trim()}
      style={{ transitionDelay: `${delay}ms` }}
      {...rest}
    >
      {children}
    </Tag>
  );
}

export default Reveal;
