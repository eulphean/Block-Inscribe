#include "ofApp.h"

//--------------------------------------------------------------
void ofApp::setup(){
  ofBackground(0);
  
  receive.setup(PORT);
}

//--------------------------------------------------------------
void ofApp::update(){
  while (receive.hasWaitingMessages()) {
    ofxOscMessage m;
    // Set the next message.
    #pragma warning(disable: WARNING_CODE)
    receive.getNextMessage(&m);
    
    cout << m;
  }
}

//--------------------------------------------------------------
void ofApp::draw(){

}
