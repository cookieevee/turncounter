//********************場全体*******************************//
//---------------------------------------
//天候　Weather
//---------------------------------------
var Weather_Count = 0; //天候ターン数カウント
var Weather_Type = -1; //天候の種類 1:はれ， 2:あめ，  3:すなあらし， 4:あられ 
var Weather_Flag = 0;  //天候岩フラグ

var Weather_LastTurn = 5; //天候ラストターン

var Output_Weather; //天候の出力
var Output_WeatherCount; //天候ターン出力
//---------------------------------------

//天候を表示
function WeatherDisplay(num){

  Output_Weather = document.getElementById("Weather");

  if(num == 1)
  {
    if(Weather_Type != num)
    {
      Output_Weather.innerHTML = "はれ　　　　　　　　：";
      HareIwa(); AmeHyouji(); SunaHyouji(); ArareHyouji();
      Weather_Flag = 0;
      WeatherCountDisplay(1);
      Weather_Type = num;
    }
    else
    {
      Output_Weather.innerHTML = "はれ（天候岩）　　　：";
      Weather_Flag = 1;
      HareHyouji();
      WeatherCountDisplay(Weather_Count);
    }
  }
  else if(num == 2)
  {
    if(Weather_Type != num)
    {
      Output_Weather.innerHTML = "あめ　　　　　　　　：";
      HareHyouji(); AmeIwa(); SunaHyouji(); ArareHyouji();
      Weather_Flag = 0;
      WeatherCountDisplay(1);
      Weather_Type = num;
    }
    else
    {
      Output_Weather.innerHTML = "あめ（天候岩）　　　：";
      Weather_Flag = 1;
      AmeHyouji();
      WeatherCountDisplay(Weather_Count);
    }
  }
  else if(num == 3)
  {
    if(Weather_Type != num)
    {
      Output_Weather.innerHTML = "すなあらし　　　　　：";
      HareHyouji(); AmeHyouji(); SunaIwa(); ArareHyouji();
      Weather_Flag = 0;
      WeatherCountDisplay(1);
      Weather_Type = num;
    }
    else
    {
      Output_Weather.innerHTML = "すなあらし（天候岩）：";
      Weather_Flag = 1;
      SunaHyouji();
      WeatherCountDisplay(Weather_Count);
    }
  }
  else if(num == 4)
  {
    if(Weather_Type != num)
    {
      Output_Weather.innerHTML = "あられ　　　　　　　：";
      HareHyouji(); AmeHyouji(); SunaHyouji(); ArareIwa();
      Weather_Flag = 0;
      WeatherCountDisplay(1);
      Weather_Type = num;
    }
    else
    {
      Output_Weather.innerHTML = "あられ（天候岩）　　：";
      Weather_Flag = 1;
      ArareHyouji();
      WeatherCountDisplay(Weather_Count);
    }
  }
  else
  {}
}

//天候ターンを表示
function WeatherCountDisplay(num){
  Output_WeatherCount = document.getElementById("WeatherCount");

  Weather_Count = num;

  if(Weather_Flag == 0)
  {
    Weather_LastTurn = 5;
  }
  else(Weather_Flag == 1)
  {
    Weather_LastTurn = 8;
  }

  if(Weather_Count < Weather_LastTurn)
  {
    Output_WeatherCount.innerHTML = Weather_Count + "ターン目<br>";
  }
  else if(Weather_Count == Weather_LastTurn)
  {
    Output_WeatherCount.innerHTML = "<span style='color:red;'><b>"+ Weather_Count + "ターン目</b></span><br>";
  }
  else
  {}
}

//---------------------------------------
//ルーム　Trick　Magic　Wonder
//---------------------------------------
var Trick_Count = 0; //トリルターン数カウント

var Output_Trick; //トリル出力
var Output_TrickCount; //トリルターン出力
//---------------------------------------
//トリルを表示
function TrickDisplay(){

  if(Trick_Count < 1)
  {
    Output_Trick = document.getElementById("Trick");
    Output_Trick.innerHTML = "トリックルーム　　　：";
    ToriruKaijo();
    TrickCountDisplay(1);
  }
  else if(1 <= Trick_Count && Trick_Count <= 5)
  {
    Output_Trick.innerHTML = "<br>";
    Output_TrickCount.innerHTML = "";
    ToriruHyouji();
    Trick_Count = 0;
  }
  else{}

}

//トリルターンを表示
function TrickCountDisplay(num){

  Output_TrickCount = document.getElementById("TrickCount");

  Trick_Count = num;

  if(Trick_Count < 5)
  {
    Output_TrickCount.innerHTML = Trick_Count + "ターン目<br>";
  }
  else if(Trick_Count == 5)
  {
    Output_TrickCount.innerHTML = "<span style='color:red;'><b>"+ Trick_Count + "ターン目</b></span><br>";
  }
  else
  {}
}
//---------------------------------------
var Magic_Count = 0;  //マジルターン数カウント

var Output_Magic; //マジル出力
var Output_MagicCount; //マジルターン出力
//---------------------------------------
//マジルを表示
function MagicDisplay(){

  if(Magic_Count < 1)
  {
    Output_Magic = document.getElementById("Magic");
    Output_Magic.innerHTML = "マジックルーム　　　：";
    MaziruKaijo();
    MagicCountDisplay(1);
  }
  else if(1 <= Magic_Count && Magic_Count <= 5)
  {
    Output_Magic.innerHTML = "";
    Output_MagicCount.innerHTML = "";
    MaziruHyouji();
    Magic_Count = 0;
  }
  else{}
}

//マジルターンを表示
function MagicCountDisplay(num){
  Output_MagicCount = document.getElementById("MagicCount");

  Magic_Count = num;

  if(Magic_Count < 5)
  {
  Output_MagicCount.innerHTML = Magic_Count + "ターン目<br>";
  }
  else if(Magic_Count == 5)
  {
    Output_MagicCount.innerHTML = "<span style='color:red;'><b>"+ Magic_Count + "ターン目</b></span><br>";
  }
  else
  {}
}
//---------------------------------------
var Wonder_Count = 0; //ワンルターン数カウント

var Output_Wonder; //ワンル出力
var Output_WonderCount; //ワンルターン出力
//---------------------------------------
//ワンルを表示
function WonderDisplay(){

  if(Wonder_Count < 1)
  {
    Output_Wonder = document.getElementById("Wonder");
    Output_Wonder.innerHTML = "ワンダールーム　　　：";
    WanruKaijo();
    WonderCountDisplay(1);
  }
  else if(1 <= Wonder_Count && Wonder_Count <= 5)
  {
    Output_Wonder.innerHTML = "";
    Output_WonderCount.innerHTML = "";
    WanruHyouji();
    Wonder_Count = 0;
  }
  else{}
}

//ワンルターンを表示
function WonderCountDisplay(num){
  Output_WonderCount = document.getElementById("WonderCount");

  Wonder_Count = num;

  if(Wonder_Count < 5)
  {
    Output_WonderCount.innerHTML = Wonder_Count + "ターン目<br>";
  }
  else if(Wonder_Count == 5)
  {
    Output_WonderCount.innerHTML = "<span style='color:red;'><b>"+ Wonder_Count + "ターン目</b></span><br>";
  }
  else
  {}
}

//---------------------------------------
//フィールド Field
//---------------------------------------
var Field_Count = 0; //フィールドターン数カウント
var Field_Type = -1; //フィールド種類 1:エレキ 2:グラス 3:ミスト

var Output_Field; //フィールド出力
var Output_FieldCount; //フィールドターン出力
//---------------------------------------
//フィールドを表示
function FieldDisplay(num){

  if(0 < Field_Count && Field_Type == num)
  {
  }
  else
  {

    Output_Field = document.getElementById("Field");
  
    if(num == 1)
    {
      Output_Field.innerHTML = "エレキフィールド　　：";
      FieldCountDisplay(1);
      Field_Type = num;
    
    }
    else if(num == 2)
    {
      Output_Field.innerHTML = "グラスフィールド　　：";
      FieldCountDisplay(1);
      Field_Type = num;
    }
    else if(num == 3)
    {
      Output_Field.innerHTML = "ミストフィールド　　：";
      FieldCountDisplay(1);
      Field_Type = num;
    }
    else
    {}
  }
}

//フィールドターンを表示
function FieldCountDisplay(num){
  Output_FieldCount = document.getElementById("FieldCount");

  Field_Count = num;

  if(Field_Count < 5)
  {
    Output_FieldCount.innerHTML = Field_Count + "ターン目<br>";
  }
  else if(Field_Count == 5)
  {
    Output_FieldCount.innerHTML = "<span style='color:red;'><b>"+ Field_Count + "ターン目</b></span><br>";
  }
  else
  {}
}


//---------------------------------------
//重力　Gravity
//---------------------------------------
var Gravity_Count = 0; //重力ターン数カウント

var Output_Gravity; //重力出力
var Output_GravityCount; //重力ターン出力

//---------------------------------------
//重力を表示
function GravityDisplay(){

  if(Gravity_Count < 1)
  {
    Output_Gravity = document.getElementById("Gravity");

    Output_Gravity.innerHTML = "じゅうりょく　　　　：";
    GravityCountDisplay(1);
  }
  else{}
}

//重力ターンを表示
function GravityCountDisplay(num){
  Output_GravityCount = document.getElementById("GravityCount");

  Gravity_Count = num;

  if(Gravity_Count < 5)
  {
    Output_GravityCount.innerHTML = Gravity_Count + "ターン目<br>";
  }
  else if(Gravity_Count == 5)
  {
    Output_GravityCount.innerHTML = "<span style='color:red;'><b>"+ Gravity_Count + "ターン目</b></span><br>";
  }
  else
  {}
}

//---------------------------------------
//水遊び　Water
//---------------------------------------
var Water_Count = 0; //水遊びターン数カウント

var Output_Water; //水遊び出力
var Output_WaterCount; //水遊びターン出力

//---------------------------------------
//水遊びを表示
function WaterDisplay(){

  if(Water_Count < 1)
  {
    Output_Water = document.getElementById("Water");

    Output_Water.innerHTML = "みずあそび　　　　　：";
    WaterCountDisplay(1);
  }
  else{}
}

//水遊びターンを表示
function WaterCountDisplay(num){
  Output_WaterCount = document.getElementById("WaterCount");

  Water_Count = num;

  if(Water_Count < 5)
  {
  Output_WaterCount.innerHTML = Water_Count + "ターン目<br>";
  }
  else if(Water_Count == 5)
  {
    Output_WaterCount.innerHTML = "<span style='color:red;'><b>"+ Water_Count + "ターン目</b></span><br>";
  }
  else
  {}
}

//---------------------------------------
//泥遊び　Mud
//---------------------------------------
var Mud_Count = 0; //泥遊びターン数カウント

var Output_Mud; //泥遊び出力
var Output_MudCount; //泥遊びターン出力
//---------------------------------------
//泥遊びを表示
function MudDisplay(){

  if(Mud_Count < 1)
  {
    Output_Mud = document.getElementById("Mud");

    Output_Mud.innerHTML = "どろあそび　　　　　：";
    MudCountDisplay(1);
  }
  else{}
}

//泥遊びターンを表示
function MudCountDisplay(num){
  Output_MudCount = document.getElementById("MudCount");

  Mud_Count = num;

  if(Mud_Count < 5)
  {
    Output_MudCount.innerHTML = Mud_Count + "ターン目<br>";
  }
  else if(Mud_Count == 5)
  {
    Output_MudCount.innerHTML = "<span style='color:red;'><b>"+ Mud_Count + "ターン目</b></span><br>";
  }
  else
  {}
}
//---------------------------------------
//********************相手側・自分側*******************************//
//---------------------------------------
//おいかぜ　Oikaze　OpoOikaze  YouOikaze
//---------------------------------------
//相手側  1  //
var OpoOikaze_Count = 0; //おいかぜターン数カウント

var Output_OpoOikaze; //おいかぜの出力
var Output_OpoOikazeCount; //おいかぜターン出力
//---------------------------------------
//自分側  2  //
var YouOikaze_Count = 0; //おいかぜターン数カウント

var Output_YouOikaze; //おいかぜの出力
var Output_YouOikazeCount; //おいかぜターン出力
//---------------------------------------
//おいかぜを表示
function OikazeDisplay(num){

  if(num == 1)
  { //相手側
    if(OpoOikaze_Count < 1)
    {
      Output_OpoOikaze = document.getElementById("OpoOikaze");

      Output_OpoOikaze.innerHTML = "おいかぜ　　　　　　：";
      OikazeCountDisplay(num,1);
    }
    else{}
  }
  else if(num == 2)
  { //自分側
    if(YouOikaze_Count < 1)
    {
      Output_YouOikaze = document.getElementById("YouOikaze");

      Output_YouOikaze.innerHTML = "おいかぜ　　　　　　：";
      OikazeCountDisplay(num,1);
    }
    else{}
  }else{}
}

//おいかぜターンを表示 num1:相手か自分か   num2:ターン数
function OikazeCountDisplay(num1,num2){

  if(num1 == 1)
  { //相手側
  
    Output_OpoOikazeCount = document.getElementById("OpoOikazeCount");

    OpoOikaze_Count = num2;

    if(OpoOikaze_Count < 4)
    {
      Output_OpoOikazeCount.innerHTML = OpoOikaze_Count + "ターン目<br>";
    }
    else if(OpoOikaze_Count == 4)
    {
      Output_OpoOikazeCount.innerHTML = "<span style='color:red;'><b>"+ OpoOikaze_Count + "ターン目</b></span><br>";
    }
    else{}
  }
  else if(num1 == 2)
  { //自分側

    Output_YouOikazeCount = document.getElementById("YouOikazeCount");

    YouOikaze_Count = num2;

    if(YouOikaze_Count < 4)
    {
      Output_YouOikazeCount.innerHTML = YouOikaze_Count + "ターン目<br>";
    }
    else if(YouOikaze_Count == 4)
    {
      Output_YouOikazeCount.innerHTML = "<span style='color:red;'><b>"+ YouOikaze_Count + "ターン目</b></span><br>";
    }
    else{}
  }else{}
}

//---------------------------------------
//ひかりのかべ　Hikari　OpoHikari  YouHikari
//---------------------------------------
//相手側  1  //
var OpoHikari_Count = 0; //ひかりターン数カウント
var OpoHikari_Nendo = 0; //ひかりのかべ粘土判定

var Output_OpoHikari; //ひかりの出力
var Output_OpoHikariCount; //ひかりターン出力
//---------------------------------------
//自分側  2  //
var YouHikari_Count = 0; //ひかりターン数カウント
var YouHikari_Nendo = 0; //ひかりのかべ粘土判定

var Output_YouHikari; //ひかりの出力
var Output_YouHikariCount; //ひかりターン出力
//---------------------------------------
//ひかりを表示
function HikariDisplay(num){

  if(num == 1)
  { //相手側

      if(OpoHikari_Count < 1)
      {
        Output_OpoHikari = document.getElementById("OpoHikari");
        Output_OpoHikari.innerHTML = "ひかりのかべ　　　　：";
        HikariCountDisplay(num,1);
        HikariNendoDisplay(num);
      }
      else
      {
        HikariNendo(num);
        Output_OpoHikari = document.getElementById("OpoHikari");
        Output_OpoHikari.innerHTML = "ひかりのかべ（粘土）：";
        HikariHyouji(num);
      }
  }
  else if(num == 2)
  { //自分側

      if(YouHikari_Count < 1)
      {
        Output_YouHikari = document.getElementById("YouHikari");
        Output_YouHikari.innerHTML = "ひかりのかべ　　　　：";
        HikariCountDisplay(num,1);
        HikariNendoDisplay(num);
      }
      else
      {
        HikariNendo(num);
        Output_YouHikari = document.getElementById("YouHikari");
        Output_YouHikari.innerHTML = "ひかりのかべ（粘土）：";
        HikariHyouji(num);
      }

  }
  else{}
}

//ひかりターンを表示 num1:相手か自分か   num2:ターン数
function HikariCountDisplay(num1,num2){

  if(num1 == 1)
  { //相手側
  
    Output_OpoHikariCount = document.getElementById("OpoHikariCount");

    OpoHikari_Count = num2;

    if(OpoHikari_Nendo == 0)
    {

      if(OpoHikari_Count < 5)
      {
        Output_OpoHikariCount.innerHTML = OpoHikari_Count + "ターン目<br>";
      }
      else if(OpoHikari_Count == 5)
      {
        Output_OpoHikariCount.innerHTML = "<span style='color:red;'><b>"+ OpoHikari_Count + "ターン目</b></span><br>";
      }
      else{}

    }
    else if(OpoHikari_Nendo == 1)
    {

      if(OpoHikari_Count < 8)
      {
        Output_OpoHikariCount.innerHTML = OpoHikari_Count + "ターン目<br>";
      }
      else if(OpoHikari_Count == 8)
      {
        Output_OpoHikariCount.innerHTML = "<span style='color:red;'><b>"+ OpoHikari_Count + "ターン目</b></span><br>";
      }
      else{}

    }
    else{}
  }
  else if(num1 == 2)
  { //自分側

    Output_YouHikariCount = document.getElementById("YouHikariCount");

    YouHikari_Count = num2;

    if(YouHikari_Nendo == 0)
    {

      if(YouHikari_Count < 5)
      {
        Output_YouHikariCount.innerHTML = YouHikari_Count + "ターン目<br>";
      }
      else if(YouHikari_Count == 5)
      {
        Output_YouHikariCount.innerHTML = "<span style='color:red;'><b>"+ YouHikari_Count + "ターン目</b></span><br>";
      }
      else{}

    }
    else if(YouHikari_Nendo == 1)
    {

      if(YouHikari_Count < 8)
      {
        Output_YouHikariCount.innerHTML = YouHikari_Count + "ターン目<br>";
      }
      else if(YouHikari_Count == 8)
      {
        Output_YouHikariCount.innerHTML = "<span style='color:red;'><b>"+ YouHikari_Count + "ターン目</b></span><br>";
      }
      else{}
  
    }
    else{}
  }
  else{}
}

//---------------------------------------
//リフレクター　Reflec　OpoReflec  YouReflec
//---------------------------------------
//相手側  1  //
var OpoReflec_Count = 0; //リフレクターターン数カウント
var OpoReflec_Nendo = 0; //リフレクター粘土判定

var Output_OpoReflec; //リフレクターの出力
var Output_OpoReflecCount; //リフレクターターン出力
//---------------------------------------
//自分側  2  //
var YouReflec_Count = 0; //リフレクターターン数カウント
var YouReflec_Nendo = 0; //リフレクター粘土判定

var Output_YouReflec; //リフレクターの出力
var Output_YouReflecCount; //リフレクターターン出力
//---------------------------------------
//リフレクターを表示
function ReflecDisplay(num){

  if(num == 1)
  { //相手側
    if(OpoReflec_Count < 1)
    {
      Output_OpoReflec = document.getElementById("OpoReflec");
      Output_OpoReflec.innerHTML = "リフレクター　　　　：";
      ReflecCountDisplay(num,1);
      ReflecNendoDisplay(num);
    }
    else
    {
      ReflecNendo(num);
      Output_OpoReflec = document.getElementById("OpoReflec");
      Output_OpoReflec.innerHTML = "リフレクター（粘土）：";
      ReflecHyouji(num);
    }
  }
  else if(num == 2)
  { //自分側
    if(YouReflec_Count < 1)
    {
      Output_YouReflec = document.getElementById("YouReflec");
      Output_YouReflec.innerHTML = "リフレクター　　　　：";
      ReflecCountDisplay(num,1);
      ReflecNendoDisplay(num);
    }
    else
    {
      ReflecNendo(num);
      Output_YouReflec = document.getElementById("YouReflec");
      Output_YouReflec.innerHTML = "リフレクター（粘土）：";
      ReflecHyouji(num);
    }
  }
  else{}
}

//リフレクターターンを表示 num1:相手か自分か   num2:ターン数
function ReflecCountDisplay(num1,num2){

  if(num1 == 1)
  { //相手側
  
    Output_OpoReflecCount = document.getElementById("OpoReflecCount");

    OpoReflec_Count = num2;

    if(OpoReflec_Nendo == 0)
    {
      if(OpoReflec_Count < 5)
      {
        Output_OpoReflecCount.innerHTML = OpoReflec_Count + "ターン目<br>";
      }
      else if(OpoReflec_Count == 5)
      {
        Output_OpoReflecCount.innerHTML = "<span style='color:red;'><b>"+ OpoReflec_Count + "ターン目</b></span><br>";
      }
      else{}
    }
    else if(OpoReflec_Nendo == 1)
    {
      if(OpoReflec_Count < 8)
      {
        Output_OpoReflecCount.innerHTML = OpoReflec_Count + "ターン目<br>";
      }
      else if(OpoReflec_Count == 8)
      {
        Output_OpoReflecCount.innerHTML = "<span style='color:red;'><b>"+ OpoReflec_Count + "ターン目</b></span><br>";
      }
      else{}
    }
    else{}
  }
  else if(num1 == 2)
  { //自分側

    Output_YouReflecCount = document.getElementById("YouReflecCount");

    YouReflec_Count = num2;

    if(YouReflec_Nendo == 0)
    {
      if(YouReflec_Count < 5)
      {
        Output_YouReflecCount.innerHTML = YouReflec_Count + "ターン目<br>";
      }
      else if(YouReflec_Count == 5)
      {
        Output_YouReflecCount.innerHTML = "<span style='color:red;'><b>"+ YouReflec_Count + "ターン目</b></span><br>";
      }
      else{}
    }
    else if(YouReflec_Nendo == 1)
    {
      if(YouReflec_Count < 8)
      {
        Output_YouReflecCount.innerHTML = YouReflec_Count + "ターン目<br>";
      }
      else if(YouReflec_Count == 8)
      {
        Output_YouReflecCount.innerHTML = "<span style='color:red;'><b>"+ YouReflec_Count + "ターン目</b></span><br>";
      }
      else{}
    }
    else{}
  }
  else{}
}

//---------------------------------------
//しんぴのまもり　Sinpi　OpoSinpi  YouSinpi
//---------------------------------------
//相手側  1  //
var OpoSinpi_Count = 0; //しんぴのまもりターン数カウント

var Output_OpoSinpi; //しんぴのまもりの出力
var Output_OpoSinpiCount; //しんぴのまもりターン出力
//---------------------------------------
//自分側  2  //
var YouSinpi_Count = 0; //しんぴのまもりターン数カウント

var Output_YouSinpi; //しんぴのまもりの出力
var Output_YouSinpiCount; //しんぴのまもりターン出力
//---------------------------------------
//しんぴのまもりを表示
function SinpiDisplay(num){

  if(num == 1)
  { //相手側
    if(OpoSinpi_Count < 1)
    {
      Output_OpoSinpi = document.getElementById("OpoSinpi");

      Output_OpoSinpi.innerHTML = "しんぴのまもり　　　：";
      SinpiCountDisplay(num,1);
    }
    else{}
  }
  else if(num == 2)
  { //自分側
    if(YouSinpi_Count < 1)
    {
      Output_YouSinpi = document.getElementById("YouSinpi");

      Output_YouSinpi.innerHTML = "しんぴのまもり　　　：";
      SinpiCountDisplay(num,1);
    }
    else{}
  }else{}
}

//しんぴのまもりターンを表示 num1:相手か自分か   num2:ターン数
function SinpiCountDisplay(num1,num2){

  if(num1 == 1)
  { //相手側
  
    Output_OpoSinpiCount = document.getElementById("OpoSinpiCount");

    OpoSinpi_Count = num2;

    if(OpoSinpi_Count < 5)
    {
      Output_OpoSinpiCount.innerHTML = OpoSinpi_Count + "ターン目<br>";
    }
    else if(OpoSinpi_Count == 5)
    {
      Output_OpoSinpiCount.innerHTML = "<span style='color:red;'><b>"+ OpoSinpi_Count + "ターン目</b></span><br>";
    }
    else{}
  }
  else if(num1 == 2)
  { //自分側

    Output_YouSinpiCount = document.getElementById("YouSinpiCount");

    YouSinpi_Count = num2;

    if(YouSinpi_Count < 5)
    {
      Output_YouSinpiCount.innerHTML = YouSinpi_Count + "ターン目<br>";
    }
    else if(YouSinpi_Count == 5)
    {
      Output_YouSinpiCount.innerHTML = "<span style='color:red;'><b>"+ YouSinpi_Count + "ターン目</b></span><br>";
    }
    else{}
  }else{}
}


//---------------------------------------
//ひのうみ　Hinoumi　OpoHinoumi  YouHinoumi
//---------------------------------------
//相手側  1  //
var OpoHinoumi_Count = 0; //ひのうみターン数カウント

var Output_OpoHinoumi; //ひのうみの出力
var Output_OpoHinoumiCount; //ひのうみターン出力
//---------------------------------------
//自分側  2  //
var YouHinoumi_Count = 0; //ひのうみターン数カウント

var Output_YouHinoumi; //ひのうみの出力
var Output_YouHinoumiCount; //ひのうみターン出力
//---------------------------------------
//ひのうみを表示
function HinoumiDisplay(num){

  if(num == 1)
  { //相手側
    if(OpoHinoumi_Count < 1)
    {
      Output_OpoHinoumi = document.getElementById("OpoHinoumi");

      Output_OpoHinoumi.innerHTML = "ひのうみ　　　　　　：";
      HinoumiCountDisplay(num,1);
    }
    else{}
  }
  else if(num == 2)
  { //自分側
    if(YouHinoumi_Count < 1)
    {
      Output_YouHinoumi = document.getElementById("YouHinoumi");

      Output_YouHinoumi.innerHTML = "ひのうみ　　　　　　：";
      HinoumiCountDisplay(num,1);
    }
    else{}
  }else{}
}

//ひのうみターンを表示 num1:相手か自分か   num2:ターン数
function HinoumiCountDisplay(num1,num2){

  if(num1 == 1)
  { //相手側
  
    Output_OpoHinoumiCount = document.getElementById("OpoHinoumiCount");

    OpoHinoumi_Count = num2;

    if(OpoHinoumi_Count < 5)
    {
      Output_OpoHinoumiCount.innerHTML = OpoHinoumi_Count + "ターン目<br>";
    }
    else if(OpoHinoumi_Count == 5)
    {
      Output_OpoHinoumiCount.innerHTML = "<span style='color:red;'><b>"+ OpoHinoumi_Count + "ターン目</b></span><br>";
    }
    else{}
  }
  else if(num1 == 2)
  { //自分側

    Output_YouHinoumiCount = document.getElementById("YouHinoumiCount");

    YouHinoumi_Count = num2;

    if(YouHinoumi_Count < 5)
    {
      Output_YouHinoumiCount.innerHTML = YouHinoumi_Count + "ターン目<br>";
    }
    else if(YouHinoumi_Count == 5)
    {
      Output_YouHinoumiCount.innerHTML = "<span style='color:red;'><b>"+ YouHinoumi_Count + "ターン目</b></span><br>";
    }
    else{}
  }else{}
}

//---------------------------------------
//にじ　Niji　OpoNiji  YouNiji
//---------------------------------------
//相手側  1  //
var OpoNiji_Count = 0; //にじターン数カウント

var Output_OpoNiji; //にじの出力
var Output_OpoNijiCount; //にじターン出力
//---------------------------------------
//自分側  2  //
var YouNiji_Count = 0; //にじターン数カウント

var Output_YouNiji; //にじの出力
var Output_YouNijiCount; //にじターン出力
//---------------------------------------
//にじを表示
function NijiDisplay(num){

  if(num == 1)
  { //相手側
    if(OpoNiji_Count < 1)
    {
      Output_OpoNiji = document.getElementById("OpoNiji");

      Output_OpoNiji.innerHTML = "にじ　　　　　　　　：";
      NijiCountDisplay(num,1);
    }
    else{}
  }
  else if(num == 2)
  { //自分側
    if(YouNiji_Count < 1)
    {
      Output_YouNiji = document.getElementById("YouNiji");

      Output_YouNiji.innerHTML = "にじ　　　　　　　　：";
      NijiCountDisplay(num,1);
    }
    else{}
  }else{}
}

//にじターンを表示 num1:相手か自分か   num2:ターン数
function NijiCountDisplay(num1,num2){

  if(num1 == 1)
  { //相手側
  
    Output_OpoNijiCount = document.getElementById("OpoNijiCount");

    OpoNiji_Count = num2;

    if(OpoNiji_Count < 5)
    {
      Output_OpoNijiCount.innerHTML = OpoNiji_Count + "ターン目<br>";
    }
    else if(OpoNiji_Count == 5)
    {
      Output_OpoNijiCount.innerHTML = "<span style='color:red;'><b>"+ OpoNiji_Count + "ターン目</b></span><br>";
    }
    else{}
  }
  else if(num1 == 2)
  { //自分側

    Output_YouNijiCount = document.getElementById("YouNijiCount");

    YouNiji_Count = num2;

    if(YouNiji_Count < 5)
    {
      Output_YouNijiCount.innerHTML = YouNiji_Count + "ターン目<br>";
    }
    else if(YouNiji_Count == 5)
    {
      Output_YouNijiCount.innerHTML = "<span style='color:red;'><b>"+ YouNiji_Count + "ターン目</b></span><br>";
    }
    else{}
  }else{}
}

//---------------------------------------
//しつげん　Situgen　OpoSitugen  YouSitugen
//---------------------------------------
//相手側  1  //
var OpoSitugen_Count = 0; //しつげんターン数カウント

var Output_OpoSitugen; //しつげんの出力
var Output_OpoSitugenCount; //しつげんターン出力
//---------------------------------------
//自分側  2  //
var YouSitugen_Count = 0; //しつげんターン数カウント

var Output_YouSitugen; //しつげんの出力
var Output_YouSitugenCount; //しつげんターン出力
//---------------------------------------
//しつげんを表示
function SitugenDisplay(num){

  if(num == 1)
  { //相手側
    if(OpoSitugen_Count < 1)
    {
      Output_OpoSitugen = document.getElementById("OpoSitugen");

      Output_OpoSitugen.innerHTML = "しつげん　　　　　　：";
      SitugenCountDisplay(num,1);
    }
    else{}
  }
  else if(num == 2)
  { //自分側
    if(YouSitugen_Count < 1)
    {
      Output_YouSitugen = document.getElementById("YouSitugen");

      Output_YouSitugen.innerHTML = "しつげん　　　　　　：";
      SitugenCountDisplay(num,1);
    }
    else{}
  }else{}
}

//しつげんターンを表示 num1:相手か自分か   num2:ターン数
function SitugenCountDisplay(num1,num2){

  if(num1 == 1)
  { //相手側
  
    Output_OpoSitugenCount = document.getElementById("OpoSitugenCount");

    OpoSitugen_Count = num2;

    if(OpoSitugen_Count < 5)
    {
      Output_OpoSitugenCount.innerHTML = OpoSitugen_Count + "ターン目<br>";
    }
    else if(OpoSitugen_Count == 5)
    {
      Output_OpoSitugenCount.innerHTML = "<span style='color:red;'><b>"+ OpoSitugen_Count + "ターン目</b></span><br>";
    }
    else{}
  }
  else if(num1 == 2)
  { //自分側

    Output_YouSitugenCount = document.getElementById("YouSitugenCount");

    YouSitugen_Count = num2;

    if(YouSitugen_Count < 5)
    {
      Output_YouSitugenCount.innerHTML = YouSitugen_Count + "ターン目<br>";
    }
    else if(YouSitugen_Count == 5)
    {
      Output_YouSitugenCount.innerHTML = "<span style='color:red;'><b>"+ YouSitugen_Count + "ターン目</b></span><br>";
    }
    else{}
  }else{}
}
//---------------------------------------
//しろいきり　Siroi　OpoSiroi  YouSiroi
//---------------------------------------
//相手側  1  //
var OpoSiroi_Count = 0; //しろいきりターン数カウント

var Output_OpoSiroi; //しろいきり出力
var Output_OpoSiroiCount; //しろいきりターン出力
//---------------------------------------
//自分側  2  //
var YouSiroi_Count = 0; //しろいきりターン数カウント

var Output_YouSiroi; //しろいきり出力
var Output_YouSiroiCount; //しろいきりターン出力
//---------------------------------------
//しろいきり表示
function SiroiDisplay(num){

  if(num == 1)
  { //相手側
    if(OpoSiroi_Count < 1)
    {
      Output_OpoSiroi = document.getElementById("OpoSiroi");

      Output_OpoSiroi.innerHTML = "しろいきり　　　　　：";
      SiroiCountDisplay(num,1);
    }
    else{}
  }
  else if(num == 2)
  { //自分側
    if(YouSiroi_Count < 1)
    {
      Output_YouSiroi = document.getElementById("YouSiroi");

      Output_YouSiroi.innerHTML = "しろいきり　　　　　：";
      SiroiCountDisplay(num,1);
    }
    else{}
  }else{}
}

//しろいきりターンを表示 num1:相手か自分か   num2:ターン数
function SiroiCountDisplay(num1,num2){

  if(num1 == 1)
  { //相手側
  
    Output_OpoSiroiCount = document.getElementById("OpoSiroiCount");

    OpoSiroi_Count = num2;

    if(OpoSiroi_Count < 5)
    {
      Output_OpoSiroiCount.innerHTML = OpoSiroi_Count + "ターン目<br>";
    }
    else if(OpoSiroi_Count == 5)
    {
      Output_OpoSiroiCount.innerHTML = "<span style='color:red;'><b>"+ OpoSiroi_Count + "ターン目</b></span><br>";
    }
    else{}
  }
  else if(num1 == 2)
  { //自分側

    Output_YouSiroiCount = document.getElementById("YouSiroiCount");

    YouSiroi_Count = num2;

    if(YouSiroi_Count < 5)
    {
      Output_YouSiroiCount.innerHTML = YouSiroi_Count + "ターン目<br>";
    }
    else if(YouSiroi_Count == 5)
    {
      Output_YouSiroiCount.innerHTML = "<span style='color:red;'><b>"+ YouSiroi_Count + "ターン目</b></span><br>";
    }
    else{}
  }else{}
}
//---------------------------------------
//おまじない　Omajinai　OpoOmajinai  YouOmajinai
//---------------------------------------
//相手側  1  //
var OpoOmajinai_Count = 0; //おまじないターン数カウント

var Output_OpoOmajinai; //おまじない出力
var Output_OpoOmajinaiCount; //おまじないターン出力
//---------------------------------------
//自分側  2  //
var YouOmajinai_Count = 0; //おまじないターン数カウント

var Output_YouOmajinai; //おまじない出力
var Output_YouOmajinaiCount; //おまじないターン出力
//---------------------------------------
//おまじない表示
function OmajinaiDisplay(num){

  if(num == 1)
  { //相手側
    if(OpoOmajinai_Count < 1)
    {
      Output_OpoOmajinai = document.getElementById("OpoOmajinai");

      Output_OpoOmajinai.innerHTML = "おまじない　　　　　：";
      OmajinaiCountDisplay(num,1);
    }
    else{}
  }
  else if(num == 2)
  { //自分側
    if(YouOmajinai_Count < 1)
    {
      Output_YouOmajinai = document.getElementById("YouOmajinai");

      Output_YouOmajinai.innerHTML = "おまじない　　　　　：";
      OmajinaiCountDisplay(num,1);
    }
    else{}
  }else{}
}

//おまじないターンを表示 num1:相手か自分か   num2:ターン数
function OmajinaiCountDisplay(num1,num2){

  if(num1 == 1)
  { //相手側
  
    Output_OpoOmajinaiCount = document.getElementById("OpoOmajinaiCount");

    OpoOmajinai_Count = num2;

    if(OpoOmajinai_Count < 5)
    {
      Output_OpoOmajinaiCount.innerHTML = OpoOmajinai_Count + "ターン目<br>";
    }
    else if(OpoOmajinai_Count == 5)
    {
      Output_OpoOmajinaiCount.innerHTML = "<span style='color:red;'><b>"+ OpoOmajinai_Count + "ターン目</b></span><br>";
    }
    else{}
  }
  else if(num1 == 2)
  { //自分側

    Output_YouOmajinaiCount = document.getElementById("YouOmajinaiCount");

    YouOmajinai_Count = num2;

    if(YouOmajinai_Count < 5)
    {
      Output_YouOmajinaiCount.innerHTML = YouOmajinai_Count + "ターン目<br>";
    }
    else if(YouOmajinai_Count == 5)
    {
      Output_YouOmajinaiCount.innerHTML = "<span style='color:red;'><b>"+ YouOmajinai_Count + "ターン目</b></span><br>";
    }
    else{}
  }else{}
}
//---------------------------------------
//かいふくふうじ　Kaihuku　OpoKaihuku  YouKaihuku
//---------------------------------------
//相手側  1  //
var OpoKaihuku_Count = 0; //かいふくふうじターン数カウント

var Output_OpoKaihuku; //かいふくふうじ出力
var Output_OpoKaihukuCount; //かいふくふうじターン出力
//---------------------------------------
//自分側  2  //
var YouKaihuku_Count = 0; //かいふくふうじターン数カウント

var Output_YouKaihuku; //かいふくふうじ出力
var Output_YouKaihukuCount; //かいふくふうじターン出力
//---------------------------------------
//かいふくふうじ表示
function KaihukuDisplay(num){

  if(num == 1)
  { //相手側
    if(OpoKaihuku_Count < 1)
    {
      Output_OpoKaihuku = document.getElementById("OpoKaihuku");

      Output_OpoKaihuku.innerHTML = "かいふくふうじ　　　：";
      KaihukuCountDisplay(num,1);
    }
    else{}
  }
  else if(num == 2)
  { //自分側
    if(YouKaihuku_Count < 1)
    {
      Output_YouKaihuku = document.getElementById("YouKaihuku");

      Output_YouKaihuku.innerHTML = "かいふくふうじ　　　：";
      KaihukuCountDisplay(num,1);
    }
    else{}
  }else{}
}

//かいふくふうじターンを表示 num1:相手か自分か   num2:ターン数
function KaihukuCountDisplay(num1,num2){

  if(num1 == 1)
  { //相手側
  
    Output_OpoKaihukuCount = document.getElementById("OpoKaihukuCount");

    OpoKaihuku_Count = num2;

    if(OpoKaihuku_Count < 5)
    {
      Output_OpoKaihukuCount.innerHTML = OpoKaihuku_Count + "ターン目<br>";
    }
    else if(OpoKaihuku_Count == 5)
    {
      Output_OpoKaihukuCount.innerHTML = "<span style='color:red;'><b>"+ OpoKaihuku_Count + "ターン目</b></span><br>";
    }
    else{}
  }
  else if(num1 == 2)
  { //自分側

    Output_YouKaihukuCount = document.getElementById("YouKaihukuCount");

    YouKaihuku_Count = num2;

    if(YouKaihuku_Count < 5)
    {
      Output_YouKaihukuCount.innerHTML = YouKaihuku_Count + "ターン目<br>";
    }
    else if(YouKaihuku_Count == 5)
    {
      Output_YouKaihukuCount.innerHTML = "<span style='color:red;'><b>"+ YouKaihuku_Count + "ターン目</b></span><br>";
    }
    else{}
  }else{}
}

//********************共通処理*******************************//
//---------------------------------------
//　1ターン進める
//---------------------------------------
function Next(){
//----------------------
//天候
  if(Weather_Count == 0)
  {
  }
  else if(1 <= Weather_Count && Weather_Count < Weather_LastTurn)
  {
    WeatherCountDisplay(Weather_Count+1);
  }
  else if(Weather_Count == Weather_LastTurn)
  {
    WeatherReset();
  }
//----------------------
//トリル
  if(Trick_Count == 0)
  {
  }
  else if(1 <= Trick_Count && Trick_Count <= 4)
  {
    TrickCountDisplay(Trick_Count+1);
  }
  else if(Trick_Count == 5)
  {
    TrickReset();
  }
//----------------------
//マジル
  if(Magic_Count == 0)
  {
  }
  else if(1 <= Magic_Count && Magic_Count <= 4)
  {
    MagicCountDisplay(Magic_Count+1);
  }
  else if(Magic_Count == 5)
  {
    MagicReset();
  }

//----------------------
//ワンル
  if(Wonder_Count == 0)
  {
  }
  else if(1 <= Wonder_Count && Wonder_Count <= 4)
  {
    WonderCountDisplay(Wonder_Count+1);
  }
  else if(Wonder_Count == 5)
  {
    WonderReset();
  }
//----------------------
//フィールド
  if(Field_Count == 0)
  {
  }
  else if(1 <= Field_Count && Field_Count <= 4)
  {
    FieldCountDisplay(Field_Count+1);
  }
  else if(Field_Count == 5)
  {
    FieldReset();
  }
//----------------------
//重力
  if(Gravity_Count == 0)
  {
  }
  else if(1 <= Gravity_Count && Gravity_Count <= 4)
  {
    GravityCountDisplay(Gravity_Count+1);
  }
  else if(Gravity_Count == 5)
  {
    GravityReset();
  }
//----------------------
//水遊び
  if(Water_Count == 0)
  {
  }
  else if(1 <= Water_Count && Water_Count <= 4)
  {
    WaterCountDisplay(Water_Count+1);
  }
  else if(Water_Count == 5)
  {
    WaterReset();
  }
//----------------------
//泥遊び
  if(Mud_Count == 0)
  {
  }
  else if(1 <= Mud_Count && Mud_Count <= 4)
  {
    MudCountDisplay(Mud_Count+1);
  }
  else if(Mud_Count == 5)
  {
    MudReset();
  }
//----------------------
//おいかぜ 相手
  if(OpoOikaze_Count == 0)
  {
  }
  else if(1 <= OpoOikaze_Count && OpoOikaze_Count <= 3)
  {
    OikazeCountDisplay(1,OpoOikaze_Count+1);
  }
  else if(OpoOikaze_Count == 4)
  {
    OikazeReset(1);
  }
//----------------------
//ひかりのかべ 相手
  if(OpoHikari_Nendo == 0)
  {
    if(OpoHikari_Count == 0)
    {
    }
    else if(1 <= OpoHikari_Count && OpoHikari_Count <= 4)
    {
      HikariCountDisplay(1,OpoHikari_Count+1);
    }
    else if(OpoHikari_Count == 5)
    {
      HikariReset(1);
    }
  }
  else if(OpoHikari_Nendo == 1)
  {
    if(OpoHikari_Count == 0)
    {
    }
    else if(1 <= OpoHikari_Count && OpoHikari_Count <= 7)
    {
      HikariCountDisplay(1,OpoHikari_Count+1);
    }
    else if(OpoHikari_Count == 8)
    {
      HikariReset(1);
    }
  }
//----------------------
//リフレクター 相手
  if(OpoReflec_Nendo == 0)
  {
    if(OpoReflec_Count == 0)
    {
    }
    else if(1 <= OpoReflec_Count && OpoReflec_Count <= 4)
    {
      ReflecCountDisplay(1,OpoReflec_Count+1);
    }
    else if(OpoReflec_Count == 5)
    {
      ReflecReset(1);
    }
  }
  else if(OpoReflec_Nendo == 1)
  {
    if(OpoReflec_Count == 0)
    {
    }
    else if(1 <= OpoReflec_Count && OpoReflec_Count <= 7)
    {
      ReflecCountDisplay(1,OpoReflec_Count+1);
    }
    else if(OpoReflec_Count == 8)
    {
      ReflecReset(1);
    }
  }
//----------------------
//しんぴのまもり 相手
  if(OpoSinpi_Count == 0)
  {
  }
  else if(1 <= OpoSinpi_Count && OpoSinpi_Count <= 4)
  {
    SinpiCountDisplay(1,OpoSinpi_Count+1);
  }
  else if(OpoSinpi_Count == 5)
  {
    SinpiReset(1);
  }
//----------------------
//ひのうみ 相手
  if(OpoHinoumi_Count == 0)
  {
  }
  else if(1 <= OpoHinoumi_Count && OpoHinoumi_Count <= 4)
  {
    HinoumiCountDisplay(1,OpoHinoumi_Count+1);
  }
  else if(OpoHinoumi_Count == 5)
  {
    HinoumiReset(1);
  }
//----------------------
//にじ 相手
  if(OpoNiji_Count == 0)
  {
  }
  else if(1 <= OpoNiji_Count && OpoNiji_Count <= 4)
  {
    NijiCountDisplay(1,OpoNiji_Count+1);
  }
  else if(OpoNiji_Count == 5)
  {
    NijiReset(1);
  }
//----------------------
//しつげん 相手
  if(OpoSitugen_Count == 0)
  {
  }
  else if(1 <= OpoSitugen_Count && OpoSitugen_Count <= 4)
  {
    SitugenCountDisplay(1,OpoSitugen_Count+1);
  }
  else if(OpoSitugen_Count == 5)
  {
    SitugenReset(1);
  }
//----------------------
//しろいきり 相手
  if(OpoSiroi_Count == 0)
  {
  }
  else if(1 <= OpoSiroi_Count && OpoSiroi_Count <= 4)
  {
    SiroiCountDisplay(1,OpoSiroi_Count+1);
  }
  else if(OpoSiroi_Count == 5)
  {
    SiroiReset(1);
  }
//----------------------
//おまじない 相手
  if(OpoOmajinai_Count == 0)
  {
  }
  else if(1 <= OpoOmajinai_Count && OpoOmajinai_Count <= 4)
  {
    OmajinaiCountDisplay(1,OpoOmajinai_Count+1);
  }
  else if(OpoOmajinai_Count == 5)
  {
    OmajinaiReset(1);
  }
//----------------------
//かいふくふうじ 相手
  if(OpoKaihuku_Count == 0)
  {
  }
  else if(1 <= OpoKaihuku_Count && OpoKaihuku_Count <= 4)
  {
    KaihukuCountDisplay(1,OpoKaihuku_Count+1);
  }
  else if(OpoKaihuku_Count == 5)
  {
    KaihukuReset(1);
  }
//----------------------

//----------------------
//おいかぜ 自分
  if(YouOikaze_Count == 0)
  {
  }
  else if(1 <= YouOikaze_Count && YouOikaze_Count <= 3)
  {
    OikazeCountDisplay(2,YouOikaze_Count+1);
  }
  else if(YouOikaze_Count == 4)
  {
    OikazeReset(2);
  }
//----------------------
//ひかりのかべ 自分
  if(YouHikari_Nendo == 0)
  {
    if(YouHikari_Count == 0)
    {
    }
    else if(1 <= YouHikari_Count && YouHikari_Count <= 4)
    {
      HikariCountDisplay(2,YouHikari_Count+1);
    }
    else if(YouHikari_Count == 5)
    {
      HikariReset(2);
    }
  }
  else if(YouHikari_Nendo == 1)
  {
    if(YouHikari_Count == 0)
    {
    }
    else if(1 <= YouHikari_Count && YouHikari_Count <= 7)
    {
      HikariCountDisplay(2,YouHikari_Count+1);
    }
    else if(YouHikari_Count == 8)
    {
      HikariReset(2);
    }
  }
//----------------------
//リフレクター 自分
  if(YouReflec_Nendo == 0)
  {
    if(YouReflec_Count == 0)
    {
    }
    else if(1 <= YouReflec_Count && YouReflec_Count <= 4)
    {
      ReflecCountDisplay(2,YouReflec_Count+1);
    }
    else if(YouReflec_Count == 5)
    {
      ReflecReset(2);
    }
  }
  else if(YouReflec_Nendo == 1)
  {
    if(YouReflec_Count == 0)
    {
    }
    else if(1 <= YouReflec_Count && YouReflec_Count <= 7)
    {
      ReflecCountDisplay(2,YouReflec_Count+1);
    }
    else if(YouReflec_Count == 8)
    {
      ReflecReset(2);
    }
  }
//----------------------
//しんぴのまもり 自分
  if(YouSinpi_Count == 0)
  {
  }
  else if(1 <= YouSinpi_Count && YouSinpi_Count <= 4)
  {
    SinpiCountDisplay(2,YouSinpi_Count+1);
  }
  else if(YouSinpi_Count == 5)
  {
    SinpiReset(2);
  }
//----------------------
//ひのうみ 自分
  if(YouHinoumi_Count == 0)
  {
  }
  else if(1 <= YouHinoumi_Count && YouHinoumi_Count <= 4)
  {
    HinoumiCountDisplay(2,YouHinoumi_Count+1);
  }
  else if(YouHinoumi_Count == 5)
  {
    HinoumiReset(2);
  }
//----------------------
//にじ 自分
  if(YouNiji_Count == 0)
  {
  }
  else if(1 <= YouNiji_Count && YouNiji_Count <= 4)
  {
    NijiCountDisplay(2,YouNiji_Count+1);
  }
  else if(YouNiji_Count == 5)
  {
    NijiReset(2);
  }
//----------------------
//しつげん 自分
  if(YouSitugen_Count == 0)
  {
  }
  else if(1 <= YouSitugen_Count && YouSitugen_Count <= 4)
  {
    SitugenCountDisplay(2,YouSitugen_Count+1);
  }
  else if(YouSitugen_Count == 5)
  {
    SitugenReset(2);
  }
//----------------------
//しろいきり 自分
  if(YouSiroi_Count == 0)
  {
  }
  else if(1 <= YouSiroi_Count && YouSiroi_Count <= 4)
  {
    SiroiCountDisplay(2,YouSiroi_Count+1);
  }
  else if(YouSiroi_Count == 5)
  {
    SiroiReset(2);
  }
//----------------------
//おまじない 自分
  if(YouOmajinai_Count == 0)
  {
  }
  else if(1 <= YouOmajinai_Count && YouOmajinai_Count <= 4)
  {
    OmajinaiCountDisplay(2,YouOmajinai_Count+1);
  }
  else if(YouOmajinai_Count == 5)
  {
    OmajinaiReset(2);
  }
//----------------------
//かいふくふうじ 自分
  if(YouKaihuku_Count == 0)
  {
  }
  else if(1 <= YouKaihuku_Count && YouKaihuku_Count <= 4)
  {
    KaihukuCountDisplay(2,YouKaihuku_Count+1);
  }
  else if(YouKaihuku_Count == 5)
  {
    KaihukuReset(2);
  }
//----------------------

}

//---------------------------------------
//　リセットボタン
//---------------------------------------
function Reset(){

  //場全体
  WeatherReset();
  TrickReset();
  MagicReset();
  WonderReset();
  FieldReset();
  GravityReset();
  WaterReset();
  MudReset();

  //相手の場
  OikazeReset(1);
  HikariReset(1);
  ReflecReset(1);
  SinpiReset(1);
  HinoumiReset(1);
  NijiReset(1);
  SitugenReset(1);
  SiroiReset(1);
  OmajinaiReset(1);
  KaihukuReset(1);

  //自分の場
  OikazeReset(2);
  HikariReset(2);
  ReflecReset(2);
  SinpiReset(2);
  HinoumiReset(2);
  NijiReset(2);
  SitugenReset(2);
  SiroiReset(2);
  OmajinaiReset(2);
  KaihukuReset(2);

}

//--------------------------------------------
//天候表示リセット
function WeatherReset(){
  Output_Weather = document.getElementById("Weather");
  Output_WeatherCount = document.getElementById("WeatherCount");

  Output_Weather.innerHTML = "<br>";
  Output_WeatherCount.innerHTML = "";

  HareHyouji();
  AmeHyouji();
  SunaHyouji();
  ArareHyouji();

  Weather_Count = 0;
  Weather_Type = -1;
  Weather_Flag = 0;
}
//--------------------------------------------
//トリックルーム表示リセット
function TrickReset(){
  Output_Trick = document.getElementById("Trick");
  Output_TrickCount = document.getElementById("TrickCount");

  Output_Trick.innerHTML = "<br>";
  Output_TrickCount.innerHTML = "";

  ToriruHyouji()

  Trick_Count = 0;
}
//--------------------------------------------
//マジックルーム表示リセット
function MagicReset(){
  Output_Magic = document.getElementById("Magic");
  Output_MagicCount = document.getElementById("MagicCount");

  Output_Magic.innerHTML = "";
  Output_MagicCount.innerHTML = "";

  MaziruHyouji()

  Magic_Count = 0;
}
//--------------------------------------------
//ワンダールーム表示リセット
function WonderReset(){
  Output_Wonder = document.getElementById("Wonder");
  Output_WonderCount = document.getElementById("WonderCount");

  Output_Wonder.innerHTML = "";
  Output_WonderCount.innerHTML = "";

  WanruHyouji()

  Wonder_Count = 0;
}
//--------------------------------------------
//フィールド表示リセット
function FieldReset(){
  Output_Field = document.getElementById("Field");
  Output_FieldCount = document.getElementById("FieldCount");

  Output_Field.innerHTML = "<br>";
  Output_FieldCount.innerHTML = "";
  Field_Count = 0;
  Field_Type = -1;
}
//--------------------------------------------
//重力表示リセット
function GravityReset(){
  Output_Gravity = document.getElementById("Gravity");
  Output_GravityCount = document.getElementById("GravityCount");

  Output_Gravity.innerHTML = "<br>";
  Output_GravityCount.innerHTML = "";
  Gravity_Count = 0;
}
//--------------------------------------------
//水遊び表示リセット
function WaterReset(){
  Output_Water = document.getElementById("Water");
  Output_WaterCount = document.getElementById("WaterCount");

  Output_Water.innerHTML = "";
  Output_WaterCount.innerHTML = "";
  Water_Count = 0;
}
//--------------------------------------------
//泥遊び表示リセット
function MudReset(){
  Output_Mud = document.getElementById("Mud");
  Output_MudCount = document.getElementById("MudCount");

  Output_Mud.innerHTML = "";
  Output_MudCount.innerHTML = "";
  Mud_Count = 0;
}
//--------------------------------------------
//おいかぜ表示リセット
function OikazeReset(num){
  if(num == 1)
  { //相手側
　  Output_OpoOikaze = document.getElementById("OpoOikaze");
    Output_OpoOikazeCount = document.getElementById("OpoOikazeCount");

    Output_OpoOikaze.innerHTML = "<br>";
    Output_OpoOikazeCount.innerHTML = "";
    OpoOikaze_Count = 0;
  }
  else
  if(num == 2)
  { //自分側
　  Output_YouOikaze = document.getElementById("YouOikaze");
    Output_YouOikazeCount = document.getElementById("YouOikazeCount");

    Output_YouOikaze.innerHTML = "<br>";
    Output_YouOikazeCount.innerHTML = "";
    YouOikaze_Count = 0;
  }
  else{}
}
//--------------------------------------------
//ひかりのかべ表示リセット
function HikariReset(num){
  if(num == 1)
  { //相手側
　  Output_OpoHikari = document.getElementById("OpoHikari");
    Output_OpoHikariCount = document.getElementById("OpoHikariCount");

    Output_OpoHikari.innerHTML = "<br>";
    Output_OpoHikariCount.innerHTML = "";

    HikariHyouji(num);

    OpoHikari_Count = 0;
    OpoHikari_Nendo = 0;
  }
  else
  if(num == 2)
  {  //自分側
　  Output_YouHikari = document.getElementById("YouHikari");
    Output_YouHikariCount = document.getElementById("YouHikariCount");

    Output_YouHikari.innerHTML = "<br>";
    Output_YouHikariCount.innerHTML = "";

    HikariHyouji(num);

    YouHikari_Count = 0;
    YouHikari_Nendo = 0;
  }
  else{}
}
//--------------------------------------------
//リフレクター表示リセット
function ReflecReset(num){
  if(num == 1)
  { //相手側
　  Output_OpoReflec = document.getElementById("OpoReflec");
    Output_OpoReflecCount = document.getElementById("OpoReflecCount");

    Output_OpoReflec.innerHTML = "<br>";
    Output_OpoReflecCount.innerHTML = "";

    ReflecHyouji(num);

    OpoReflec_Count = 0;
    OpoReflec_Nendo = 0;
  }
  else
  if(num == 2)
  {  //自分側
　  Output_YouReflec = document.getElementById("YouReflec");
    Output_YouReflecCount = document.getElementById("YouReflecCount");

    Output_YouReflec.innerHTML = "<br>";
    Output_YouReflecCount.innerHTML = "";

    ReflecHyouji(num);

    YouReflec_Count = 0;
    YouReflec_Nendo = 0;
  }
  else{}
}
//--------------------------------------------
//しんぴのまもり表示リセット
function SinpiReset(num){
  if(num == 1)
  { //相手側
　  Output_OpoSinpi = document.getElementById("OpoSinpi");
    Output_OpoSinpiCount = document.getElementById("OpoSinpiCount");

    Output_OpoSinpi.innerHTML = "<br>";
    Output_OpoSinpiCount.innerHTML = "";
    OpoSinpi_Count = 0;
  }
  else
  if(num == 2)
  {  //自分側
　  Output_YouSinpi = document.getElementById("YouSinpi");
    Output_YouSinpiCount = document.getElementById("YouSinpiCount");

    Output_YouSinpi.innerHTML = "<br>";
    Output_YouSinpiCount.innerHTML = "";
    YouSinpi_Count = 0;
  }
  else{}
}
//--------------------------------------------
//ひのうみ表示リセット
function HinoumiReset(num){
  if(num == 1)
  { //相手側
　  Output_OpoHinoumi = document.getElementById("OpoHinoumi");
    Output_OpoHinoumiCount = document.getElementById("OpoHinoumiCount");

    Output_OpoHinoumi.innerHTML = "";
    Output_OpoHinoumiCount.innerHTML = "";
    OpoHinoumi_Count = 0;
  }
  else
  if(num == 2)
  {  //自分側
　  Output_YouHinoumi = document.getElementById("YouHinoumi");
    Output_YouHinoumiCount = document.getElementById("YouHinoumiCount");

    Output_YouHinoumi.innerHTML = "";
    Output_YouHinoumiCount.innerHTML = "";
    YouHinoumi_Count = 0;
  }
  else{}
}
//--------------------------------------------
//にじ表示リセット
function NijiReset(num){
  if(num == 1)
  { //相手側
　  Output_OpoNiji = document.getElementById("OpoNiji");
    Output_OpoNijiCount = document.getElementById("OpoNijiCount");

    Output_OpoNiji.innerHTML = "";
    Output_OpoNijiCount.innerHTML = "";
    OpoNiji_Count = 0;
  }
  else
  if(num == 2)
  {  //自分側
　  Output_YouNiji = document.getElementById("YouNiji");
    Output_YouNijiCount = document.getElementById("YouNijiCount");

    Output_YouNiji.innerHTML = "";
    Output_YouNijiCount.innerHTML = "";
    YouNiji_Count = 0;
  }
  else{}
}
//--------------------------------------------
//しつげん表示リセット
function SitugenReset(num){
  if(num == 1)
  { //相手側
　  Output_OpoSitugen = document.getElementById("OpoSitugen");
    Output_OpoSitugenCount = document.getElementById("OpoSitugenCount");

    Output_OpoSitugen.innerHTML = "";
    Output_OpoSitugenCount.innerHTML = "";
    OpoSitugen_Count = 0;
  }
  else
  if(num == 2)
  {  //自分側
　  Output_YouSitugen = document.getElementById("YouSitugen");
    Output_YouSitugenCount = document.getElementById("YouSitugenCount");

    Output_YouSitugen.innerHTML = "";
    Output_YouSitugenCount.innerHTML = "";
    YouSitugen_Count = 0;
  }
  else{}
}
//--------------------------------------------
//しろいきり表示リセット
function SiroiReset(num){
  if(num == 1)
  { //相手側
　  Output_OpoSiroi = document.getElementById("OpoSiroi");
    Output_OpoSiroiCount = document.getElementById("OpoSiroiCount");

    Output_OpoSiroi.innerHTML = "";
    Output_OpoSiroiCount.innerHTML = "";
    OpoSiroi_Count = 0;
  }
  else
  if(num == 2)
  {  //自分側
　  Output_YouSiroi = document.getElementById("YouSiroi");
    Output_YouSiroiCount = document.getElementById("YouSiroiCount");

    Output_YouSiroi.innerHTML = "";
    Output_YouSiroiCount.innerHTML = "";
    YouSiroi_Count = 0;
  }
  else{}
}
//--------------------------------------------
//おまじない表示リセット
function OmajinaiReset(num){
  if(num == 1)
  { //相手側
　  Output_OpoOmajinai = document.getElementById("OpoOmajinai");
    Output_OpoOmajinaiCount = document.getElementById("OpoOmajinaiCount");

    Output_OpoOmajinai.innerHTML = "";
    Output_OpoOmajinaiCount.innerHTML = "";
    OpoOmajinai_Count = 0;
  }
  else
  if(num == 2)
  {  //自分側
　  Output_YouOmajinai = document.getElementById("YouOmajinai");
    Output_YouOmajinaiCount = document.getElementById("YouOmajinaiCount");

    Output_YouOmajinai.innerHTML = "";
    Output_YouOmajinaiCount.innerHTML = "";
    YouOmajinai_Count = 0;
  }
  else{}
}
//--------------------------------------------
//かいふくふうじ表示リセット
function KaihukuReset(num){
  if(num == 1)
  { //相手側
　  Output_OpoKaihuku = document.getElementById("OpoKaihuku");
    Output_OpoKaihukuCount = document.getElementById("OpoKaihukuCount");

    Output_OpoKaihuku.innerHTML = "";
    Output_OpoKaihukuCount.innerHTML = "";
    OpoKaihuku_Count = 0;
  }
  else
  if(num == 2)
  {  //自分側
　  Output_YouKaihuku = document.getElementById("YouKaihuku");
    Output_YouKaihukuCount = document.getElementById("YouKaihukuCount");

    Output_YouKaihuku.innerHTML = "";
    Output_YouKaihukuCount.innerHTML = "";
    YouKaihuku_Count = 0;
  }
  else{}
}
//--------------------------------------------

//********************ボタン表示切替*************************//
//全体
//* はれ天候岩延長 * //
function HareIwa(){
　  Output_HareIwa = document.getElementById("Hare");
    Output_HareIwa.innerHTML = "はれ＋天候岩";
}

//* はれ通常表示 * //
function HareHyouji(){
　  Output_HareIwa = document.getElementById("Hare");
    Output_HareIwa.innerHTML = "はれ";
}

//* あめ天候岩延長 * //
function AmeIwa(){
　  Output_AmeIwa = document.getElementById("Ame");
    Output_AmeIwa.innerHTML = "あめ＋天候岩";
}

//* あめ通常表示 * //
function AmeHyouji(){
　  Output_AmeIwa = document.getElementById("Ame");
    Output_AmeIwa.innerHTML = "あめ";
}


//* すな天候岩延長 * //
function SunaIwa(){
　  Output_SunaIwa = document.getElementById("Sunaarasi");
    Output_SunaIwa.innerHTML = "すなあらし＋天候岩";
}

//* すな通常表示 * //
function SunaHyouji(){
　  Output_SunaIwa = document.getElementById("Sunaarasi");
    Output_SunaIwa.innerHTML = "すなあらし";
}


//* あられ天候岩延長 * //
function ArareIwa(){
　  Output_ArareIwa = document.getElementById("Arare");
    Output_ArareIwa.innerHTML = "あられ＋天候岩";
}

//* あられ通常表示 * //
function ArareHyouji(){
　  Output_ArareIwa = document.getElementById("Arare");
    Output_ArareIwa.innerHTML = "あられ";
}


//* トリル解除 * //
function ToriruKaijo(){
　  Output_ToriruKaijo = document.getElementById("TrickRoom");
    Output_ToriruKaijo.innerHTML = "トリル解除";
}

//* トリル表示 * //
function ToriruHyouji(){
　  Output_ToriruKaijo = document.getElementById("TrickRoom");
    Output_ToriruKaijo.innerHTML = "トリックルーム";
}

//* マジル解除 * //
function MaziruKaijo(){
　  Output_MaziruKaijo = document.getElementById("MagicRoom");
    Output_MaziruKaijo.innerHTML = "マジル解除";
}

//* マジル表示 * //
function MaziruHyouji(){
　  Output_MaziruKaijo = document.getElementById("MagicRoom");
    Output_MaziruKaijo.innerHTML = "マジックルーム";
}

//* ワンル解除 * //
function WanruKaijo(){
　  Output_WanruKaijo = document.getElementById("WonderRoom");
    Output_WanruKaijo.innerHTML = "ワンル解除";
}

//* ワンル表示 * //
function WanruHyouji(){
　  Output_WanruKaijo = document.getElementById("WonderRoom");
    Output_WanruKaijo.innerHTML = "ワンダールーム";
}

//相手側・自分側
//* ひかりのかべ粘土延長 * //
function HikariNendoDisplay(num){
  if(num == 1)
  {
　  Output_HikariNendo = document.getElementById("OpoHikarinokabe");
    Output_HikariNendo.innerHTML = "ひかりのかべ＋粘土";
  }
  else if(num == 2)
  {
　  Output_HikariNendo = document.getElementById("YouHikarinokabe");
    Output_HikariNendo.innerHTML = "ひかりのかべ＋粘土";
  }
  else{}
}

//* ひかりのかべ表示 * //
function HikariHyouji(num){
  if(num == 1)
  {
　  Output_HikariNendo = document.getElementById("OpoHikarinokabe");
    Output_HikariNendo.innerHTML = "ひかりのかべ";

  //  OpoHikari_Nendo = 0;
  }
  else if(num == 2)
  {
　  Output_HikariNendo = document.getElementById("YouHikarinokabe");
    Output_HikariNendo.innerHTML = "ひかりのかべ";

 //   YouHikari_Nendo = 0;
  }
  else{}
}

//ひかりのかべ粘土フラグ
function HikariNendo(num){
  if(num == 1)
  {
    OpoHikari_Nendo = 1;
  }
  else if(num == 2)
  {
    YouHikari_Nendo = 1;
  }
  else{}
}

//相手側・自分側
//* リフレクター粘土延長 * //
function ReflecNendoDisplay(num){
  if(num == 1)
  {
　  Output_ReflecNendo = document.getElementById("OpoReflector");
    Output_ReflecNendo.innerHTML = "リフレクター＋粘土";
  }
  else if(num == 2)
  {
　  Output_ReflecNendo = document.getElementById("YouReflector");
    Output_ReflecNendo.innerHTML = "リフレクター＋粘土";
  }
  else{}
}

//* リフレクター表示 * //
function ReflecHyouji(num){
  if(num == 1)
  {
　  Output_ReflecNendo = document.getElementById("OpoReflector");
    Output_ReflecNendo.innerHTML = "リフレクター";

 //   OpoReflec_Nendo = 0;
  }
  else if(num == 2)
  {
　  Output_ReflecNendo = document.getElementById("YouReflector");
    Output_ReflecNendo.innerHTML = "リフレクター";

   // YouReflec_Nendo = 0;
  }
  else{}
}

//リフレクター粘土フラグ
function ReflecNendo(num){
  if(num == 1)
  {
    OpoReflec_Nendo = 1;
  }
  else if(num == 2)
  {
    YouReflec_Nendo = 1;
  }
  else{}
}

/* ------ 壁破壊マン ------ */
/* かわらわりボタン */
function Kawarawari(num){
  HikariReset(num);
  ReflecReset(num);
}  

/* きりばらいボタン */
function Kiribarai(num){
  HikariReset(num);
  ReflecReset(num);
  SinpiReset(num);
}  

