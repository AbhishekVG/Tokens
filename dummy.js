<Input
                      value=''
                      secureTextEntry={true}
                      keyboardAppearance='light'
                      autoCapitalize='none'
                      autoCorrect={false}
                      keyboardType='default'
                      returnKeyType={'done'}
                      blurOnSubmit={true}
                      containerStyle={{marginTop: 16, borderBottomColor: 'rgba(0, 0, 0, 0.38)'}}
                      inputStyle={{marginLeft: 10}}
                      placeholder={'Confirm password'}
                      ref={input => this.confirmationInput = input}
                      onSubmitEditing={() => {}}
                      onChangeText={() => {}}
                      displayError={false}
                      errorMessage='Please enter the same password'
                    />

                                        <Input
                    containerStyle={{ borderRadius: 40, borderWidth: 1, borderColor: "rgba(110, 120, 170, 1)", height: 50, width: SCREEN_WIDTH - 50, marginTop: 10, marginBottom: 30 }}
                    iconContainerStyle={{ marginLeft: 20 }}
                    placeholder="Confirm Password"
                    placeholderTextColor="rgba(110, 120, 170, 1)"
                    inputStyle={{ marginLeft: 10, color: "white" }}
                    autoCapitalize="none"
                    keyboardAppearance="light"
                    secureTextEntry={true}
                    autoCorrect={false}
                    keyboardType="default"
                    returnKeyType="done"
                    blurOnSubmit={true}
                    />