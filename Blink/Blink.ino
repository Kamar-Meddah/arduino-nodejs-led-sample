unsigned int status = 0;


void setup() {
  pinMode(LED_BUILTIN, OUTPUT);
  Serial.begin(9600);
}

// the loop function runs over and over again forever
void loop() {

  while (Serial.available()) {
    status = Serial.read() - '0';
    if (status == 1) {
      Serial.write("on");
      digitalWrite(LED_BUILTIN, HIGH);
    } else if (status == 0) {
      Serial.write("off");
      digitalWrite(LED_BUILTIN, LOW);
    } else {
       Serial.write("error");
    }
  }
}
