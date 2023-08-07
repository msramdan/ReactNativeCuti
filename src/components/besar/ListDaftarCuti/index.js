import React from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  View,
  ScrollView,
} from 'react-native';
import {colors} from '../../../utils';
import {CardDaftarCuti} from '../../kecil';


const ListDaftarCuti = ({
  getListPengajuanLoading,
  getListPengajuanResult,
  getListPengajuanError,
}) => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        {getListPengajuanResult ? (
          Object.keys(getListPengajuanResult).map(key => {
            return (
              <CardDaftarCuti
                statusPengajuan={getListPengajuanResult[key]}
                key={key}
                id={key}
              />
            );
          })
        ) : getListPengajuanLoading ? (
          <View style={styles.loading}>
            <ActivityIndicator color={colors.primary} />
          </View>
        ) : getListPengajuanError ? (
          <Text>{getListPengajuanError}</Text>
        ) : (
          <Text>Data Kosong</Text>
        )}
      </View>
    </ScrollView>
  );
};
export default ListDaftarCuti;

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
});
