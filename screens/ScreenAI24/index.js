import { StyleSheet } from "react-native";
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

const ChangePasswordScreen = () => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState('');

  const handleCurrentPasswordChange = password => {
    setCurrentPassword(password);
  };

  const handleNewPasswordChange = password => {
    setNewPassword(password);
    setPasswordStrength(checkPasswordStrength(password));
  };

  const handleConfirmPasswordChange = password => {
    setConfirmPassword(password);
  };

  const checkPasswordStrength = password => {
    // Password strength logic here
    return 'strong';
  };

  const handleChangePasswordPress = () => {// Change password logic here
  };

  const renderPasswordStrength = () => {
    switch (passwordStrength) {
      case 'poor':
        return <Text>Password strength: Poor</Text>;

      case 'average':
        return <Text>Password strength: Average</Text>;

      case 'strong':
        return <Text>Password strength: Strong</Text>;

      default:
        return null;
    }
  };

  const renderCurrentPasswordError = () => {
    if (currentPassword !== 'correctpassword') {
      return <Text style={_styles.aqIFbXhs}>Incorrect password</Text>;
    }

    return null;
  };

  const renderConfirmPasswordError = () => {
    if (newPassword !== confirmPassword) {
      return <Text style={_styles.FDDhchsL}>Passwords do not match</Text>;
    }

    return null;
  };

  return <View style={_styles.lQZmjrCH}>
      <TextInput secureTextEntry={!showCurrentPassword} placeholder="Current Password" value={currentPassword} onChangeText={handleCurrentPasswordChange} />
      {renderCurrentPasswordError()}
      <View style={_styles.BkOhBjcx}>
        <TextInput secureTextEntry={!showNewPassword} placeholder="New Password" value={newPassword} onChangeText={handleNewPasswordChange} />
        <TouchableOpacity onPress={() => setShowNewPassword(!showNewPassword)}>
          <Text>{showNewPassword ? 'Hide' : 'Show'}</Text>
        </TouchableOpacity>
      </View>
      {renderPasswordStrength()}
      <View style={_styles.rzkihXrm}>
        <TextInput secureTextEntry={!showConfirmPassword} placeholder="Confirm Password" value={confirmPassword} onChangeText={handleConfirmPasswordChange} />
        <TouchableOpacity onPress={() => setShowConfirmPassword(!showConfirmPassword)}>
          <Text>{showConfirmPassword ? 'Hide' : 'Show'}</Text>
        </TouchableOpacity>
      </View>
      {renderConfirmPasswordError()}
      <TouchableOpacity onPress={handleChangePasswordPress}>
        <Text>Change Password</Text>
      </TouchableOpacity>
    </View>;
};

export default ChangePasswordScreen;

const _styles = StyleSheet.create({
  aqIFbXhs: {
    color: "red"
  },
  FDDhchsL: {
    color: "red"
  },
  lQZmjrCH: {
    flex: 1,
    padding: 20
  },
  BkOhBjcx: {
    flexDirection: "row"
  },
  rzkihXrm: {
    flexDirection: "row"
  }
});