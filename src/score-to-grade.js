function score(arr)
{
  var grade;
  if(arr>=90 && arr<=100)
  {
    grade = 'S';

  }
  else if (arr>=80) {
    grade = 'A';
  }
  else if (arr>=70) {
    grade = 'B';
  }
  else if(arr>=60)
  {
    grade = 'C';
  }
  else if(arr>=0)
  {
    grade = 'D';
  }
  else if(arr<0 || arr>100)
  {
    grade = '101';
  }
  else {
    grade = '102';
  }
  return grade;
}
