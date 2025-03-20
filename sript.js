// SNS 리스트 토글 함수
function toggleSNSList() {
    const snsList = document.getElementById('snsList');
    snsList.style.display = snsList.style.display === 'block' ? 'none' : 'block';
}

// 외부 클릭 시 SNS 리스트 닫기
document.addEventListener('click', function (event) {
    const snsBtn = document.querySelector('.snsBtn');
    const snsList = document.getElementById('snsList');
    if (!snsBtn.contains(event.target) && !snsList.contains(event.target)) {
        snsList.style.display = 'none';
    }
});
