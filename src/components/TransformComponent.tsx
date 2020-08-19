import React from "react";
import { Context } from "../store/StateContext";
import styles from "./TransformComponent.module.css";

const TransformComponent: React.FC = ({ children }) => {
  const wrapperRef = React.useRef<HTMLDivElement>();
  const contentRef = React.useRef<HTMLDivElement>();

  const context = React.useContext(Context);

  React.useEffect(() => {
    const { nodes } = context;
    nodes.setWrapperComponent(wrapperRef.current);
    nodes.setContentComponent(contentRef.current);
  }, []);

  const {
    state: {
      positionX,
      positionY,
      scale,
      options: { wrapperClass, contentClass },
    },
  } = context;

  const style = {
    WebkitTransform: `translate(${positionX}px, ${positionY}px) scale(${scale})`,
    transform: `translate(${positionX}px, ${positionY}px) scale(${scale})`,
  };
  return (
    <div
      ref={wrapperRef}
      className={`react-transform-component ${styles.container} ${wrapperClass}`}
    >
      <div
        ref={contentRef}
        className={`react-transform-element ${styles.content} ${contentClass}`}
        style={style}
      >
        {children}
      </div>
    </div>
  );
};

export { TransformComponent };
