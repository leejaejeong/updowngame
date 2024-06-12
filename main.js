let min_number = 0;
let max_nunber = 100;
let count = 5;

let computer = Math.floor( Math.random() * 100 + 1 );

$('.count').text('기회 : ' + count);
$('.min_max').text('최소'+ min_number + '에서 최대' + max_nunber);
$('a').text('다시하기');

$('button').click(function(){
    let user_number = $('.user_input').val(); 
    //input에 입력한 값을 불러오는 메소드
    //텍스트를 입력해서 버튼을 클릭 했을 경우에만 input값을 가져와야하기 때문에 여기에 변수 값을 넣는다.
    
    if( user_number > max_nunber){
        alert('최대' + max_nunber + '보다 작은 숫자를 입력하세요');
        return;
    }else if( user_number < min_number){
        alert('최소' + min_number + '보다 큰 숫자를 입력하세요');
        return;
    }

    updown_game(user_number); // 게임 함수를 실행 시킨다.

})


function updown_game(user_number){
    if( user_number > computer ){
        max_nunber = user_number;
        alert(user_number + '보다 작다');
        $('.min_max').text('최소'+ min_number + '에서 최대' + max_nunber);
        count--;
    }else if( user_number < computer ){
        min_number = user_number;
        alert(user_number + '보다 크다');
        $('.min_max').text('최소'+ min_number + '에서 최대' + max_nunber);
        count--;
    }else{
        alert('정답입니다~!');

    }
    $('.count').text('기회 : ' + count);
    if(count == 0){
        alert('게임 오버');
    }
}



// 0. html 타이틀, 입력창, 답을 제출할 버튼 작성 => 해결
// 1. 최소, 최대 값, 기회 (카운트)의 변수 생성 => 해결
// 2. 랜덤 난수 생성 & 생성이 잘 되었는지 alert();으로 확인하기 => 해결
// 3. 유저가 입력한 값 받아오기 & 생성이 잘 되었는지 alert();으로 확인하기 => 해결
// 5. 최소 ~ 최대 값을 벗어나는 숫자를 적을 경우, 경고창으로 알림 띄우기 => 해결
// 6. 컴퓨터의 랜덤숫자와 유저가 입력한 값을 비교하는 로직 짜기 => 해결
// 7. html에 기회(카운트)를 보여줄 태그와 js에서 택스트를 입력하기 => 해결
// 8. 게임이 한번 실행하면 기회(카운트) 숫자 1씩 줄이기 => 해결

// 9. 촤소0~최대100 텍스트를 보여줄 태그와 js에서 텍스트 입력하기 => 해결
//    9번 과제 설명!! ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓
//    최소0~최대100의 텍스트 중, 게임 할 때마다 유저가 입력한 값으로 변경 되어야하는데,
//    그렇게 하려면 유저가 입력한 값을 변수에 저장,기억해둬야한다. 
//    if문으로 게임이 실행되면서 변수에 유저가 입력한 값을 저장할 변수를 만들어 그 변수에 유저가 입력한 값을 넣는다.
//    예시로 
//    max_nunber = user_number;
//    $('.min_max').text('최소'+ min_number + '에서 최대' + user_number);에서
//    정답이 유저가 입력한 값보다 작으면 최대 값이 바뀌어서 최대 숫자를 보여 줘야하기 때문에
//    max_number에 유저가 입력한 값을 저장해서 화면상에서 보여줘야한다.

// 10. 초기화하는 버튼을 만들고 작동되게 한다.

// 11. 오류 발견!
//     최소 ~ 최대 값에서 벗어나는 숫자를 입력 했을 때
//     보다 큰 숫자, 작은 숫자를 입력하라는 창이 뜨지만, ~보다 작다, ~보다 크다 창도 같이 출력되는 현상
//     함수가 두번 실행? 함수 안에 조건문과 함수를 실행하는 코드가 같이 들어 있어서?
//     해결 방법 =>  최소 ~ 최대 값에서 벗어나는 숫자를 입력 했을 때 조건문이 실행되는데 그때 리턴으로 반환해 준다.

// 12. 기회를 다 소진 했을 경우 게임 오버 창 띄우기 => 해결
