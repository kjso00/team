// 드래그 기능을 추가하는 스크립트
document.addEventListener('DOMContentLoaded', (event) => {
    const mainPanel = document.getElementById('mainPanel');
    mainPanel.addEventListener('mousedown', mouseDownHandler);

    function mouseDownHandler(e) {
        e.preventDefault();

        const startY = e.clientY;
        const scrollTop = mainPanel.scrollTop;

        function mouseMoveHandler(e) {
            const dy = e.clientY - startY;
            mainPanel.scrollTop = scrollTop - dy;
        }

        function mouseUpHandler() {
            document.removeEventListener('mousemove', mouseMoveHandler);
            document.removeEventListener('mouseup', mouseUpHandler);
        }

        document.addEventListener('mousemove', mouseMoveHandler);
        document.addEventListener('mouseup', mouseUpHandler);
    }
});
