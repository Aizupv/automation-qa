let averageGrade = 'gcjgh';
switch(true){
case (averageGrade < 60 && averageGrade >= 0) :
    console.log('Незадовільно');
    break;
case (averageGrade >= 61 && averageGrade <=70) :
    console.log('Добре');
    break;
case (averageGrade >= 71 && averageGrade <=80) :
    console.log('Дуже добре');
    break;
case (averageGrade >= 81 && averageGrade <=100) :
    console.log('Відмінно');
    break;
case (averageGrade >= 100 || averageGrade <0 || typeof(averageGrade)!= Number ) :
    console.log('Значення некорректне');
    break;

}
