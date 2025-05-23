import React, { useRef } from "react";
import { gsap } from "gsap";

const DIRECTIONS = {
    LEFT: "left",
    RIGHT: "right",
    TOP: "top",
    BOTTOM: "bottom",
};

function getMouseEnterDirection(e, rect) {
    const x = e.clientX;
    const y = e.clientY;

    const leftDist = Math.abs(x - rect.left);
    const rightDist = Math.abs(rect.right - x);
    const topDist = Math.abs(y - rect.top);
    const bottomDist = Math.abs(rect.bottom - y);

    const minDist = Math.min(leftDist, rightDist, topDist, bottomDist);

    switch (minDist) {
        case leftDist:
            return DIRECTIONS.LEFT;
        case rightDist:
            return DIRECTIONS.RIGHT;
        case topDist:
            return DIRECTIONS.TOP;
        case bottomDist:
            return DIRECTIONS.BOTTOM;
        default:
            return DIRECTIONS.LEFT;
    }
}

const Button = ({ btnText, btnClass = "" }) => {
    const btnRef = useRef(null);
    const fillRef = useRef(null);
    const currentDirection = useRef(null);

    const animateFillIn = (direction) => {
        const fill = fillRef.current;

        gsap.killTweensOf(fill);
        gsap.set(fill, { opacity: 1, backgroundColor: "white" });
        gsap.set(fill, {
            top: "auto",
            bottom: "auto",
            left: "auto",
            right: "auto",
            width: "100%",
            height: "100%",
        });

        switch (direction) {
            case DIRECTIONS.LEFT:
                gsap.set(fill, { width: 0, height: "100%", top: 0, left: 0 });
                gsap.to(fill, { duration: 0.5, width: "100%", ease: "power2.out" });
                break;
            case DIRECTIONS.RIGHT:
                gsap.set(fill, { width: 0, height: "100%", top: 0, right: 0 });
                gsap.to(fill, { duration: 0.5, width: "100%", ease: "power2.out" });
                break;
            case DIRECTIONS.TOP:
                gsap.set(fill, { height: 0, width: "100%", top: 0, left: 0 });
                gsap.to(fill, { duration: 0.5, height: "100%", ease: "power2.out" });
                break;
            case DIRECTIONS.BOTTOM:
                gsap.set(fill, { height: 0, width: "100%", bottom: 0, left: 0 });
                gsap.to(fill, { duration: 0.5, height: "100%", ease: "power2.out" });
                break;
        }
    };

    const animateFillOut = (direction) => {
        const fill = fillRef.current;
        gsap.killTweensOf(fill);

        switch (direction) {
            case DIRECTIONS.LEFT:
            case DIRECTIONS.RIGHT:
                gsap.to(fill, {
                    duration: 0.5,
                    width: 0,
                    ease: "power2.in",
                    opacity: 0,
                });
                break;
            case DIRECTIONS.TOP:
            case DIRECTIONS.BOTTOM:
                gsap.to(fill, {
                    duration: 0.5,
                    height: 0,
                    ease: "power2.in",
                    opacity: 0,
                });
                break;
        }
    };

    const handleMouseEnter = (e) => {
        const btn = btnRef.current;
        const rect = btn.getBoundingClientRect();
        const direction = getMouseEnterDirection(e, rect);
        currentDirection.current = direction;

        animateFillIn(direction);

        gsap.to(btn, {
            borderColor: "#ffffff",
            duration: 0.5,
            ease: "power1.out",
            boxShadow: "0 8px 20px rgba(0, 0, 0, 0.2)",
        });
    };

    const handleMouseLeave = () => {
        const btn = btnRef.current;
        animateFillOut(currentDirection.current);

        gsap.to(btn, {
            borderColor: "#000000",
            duration: 0.5,
            ease: "power1.out",
            boxShadow: "0 0 0 rgba(0,0,0,0)",
        });
    };

    // Removed scaling
    const handleMouseDown = () => { };
    const handleMouseUp = () => { };

    return (
        <button
            ref={btnRef}
            className={`relative overflow-hidden rounded-full border border-black px-8 py-3 font-semibold cursor-pointer select-none ${btnClass}`}
            style={{
                backgroundColor: "#D3D3D3",
                color: "#000000",
                userSelect: "none",
                transformOrigin: "center",
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onTouchStart={handleMouseDown}
            onTouchEnd={handleMouseUp}
        >
            <span
                ref={fillRef}
                style={{
                    position: "absolute",
                    backgroundColor: "white",
                    opacity: 0,
                    zIndex: 0,
                    pointerEvents: "none",
                    borderRadius: "1.5rem",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                }}
            ></span>
            <span style={{ position: "relative", zIndex: 1 }}>{btnText}</span>
        </button>
    );
};

export default Button;
