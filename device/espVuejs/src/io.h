
#include "store.h"
#include "timer.h"
#include "ultis.h"
#define RL1 2
#define ON true
#define OFF false

int isDay = true;
int onPhase = false;
uint32_t ioTimer = millis();
void setupIO()
{
  pinMode(RL1, OUTPUT);
  digitalWrite(RL1, OFF);
  setOnMinute([](int h, int m)
              { isDay = h >= 6 && h < 18; });
}

void loopIO()
{
  if (millis() > ioTimer)
  {
    if (isDay)
    {
      if (onPhase)
      {
        digitalWrite(RL1, ON);
        ioTimer = millis() + getValue("on-time-day", "300000").toInt()*60000;
        onPhase = false;
        Serial.println("on-time-day");

      }
      else
      {
        digitalWrite(RL1, OFF);
        ioTimer = millis() + getValue("off-time-day", "300000").toInt()*60000;
        onPhase = true;
        Serial.println("off-time-day");
      }
    }
    else
    {
      if (onPhase)
      {
        digitalWrite(RL1, ON);
        ioTimer = millis() + getValue("on-time-night", "300000").toInt()*60000;
        onPhase = false;
        Serial.println("on-time-night");
      }
      else
      {
        digitalWrite(RL1, OFF);
        ioTimer = millis() + getValue("off-time-night", "300000").toInt()*60000;
        onPhase = true;
        Serial.println("off-time-night");
      }
    }
  }
}