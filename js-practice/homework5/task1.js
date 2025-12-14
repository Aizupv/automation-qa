
let averageGrade = 6 ;
if(averageGrade >=0 && averageGrade < 60) {
    console.log('Незадовільно') ;
} else if(averageGrade >= 60 && averageGrade <=70){
    console.log('Добре');
} else if(averageGrade >= 71 && averageGrade <=80){
    console.log('Дуже добре');
} else if (averageGrade >= 91 && averageGrade <= 100 ){
    console.log('Відмінно');
} else (
    console.log('Введене значення некорректне')
);