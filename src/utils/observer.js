// observer.js
export default function (selector, callback, threshold = 0.1) {
    let list = document.querySelectorAll(selector);
    let observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((element, index) => {
                if (element.isIntersecting) {
                    callback(element.target, index);
                    observer.unobserve(element.target); // 移除监听
                }
            });
        },
        {
            threshold,
        }
    );
    list.forEach((item) => observer.observe(item));
}