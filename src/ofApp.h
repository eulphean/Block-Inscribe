#pragma once

#include "ofMain.h"
#include "ofxESCPOS.h"
#include "ofxOsc.h"

using namespace std;
#define PORT 8081

class ofApp : public ofBaseApp{

	public:
		void setup();
		void update();
		void draw();
  
  private:
    // Thermal printer.
    ofx::ESCPOS::DefaultSerialPrinter printer;
    ofxOscReceiver receive; 
};
