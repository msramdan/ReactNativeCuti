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
  daftarCutiTodayLoading,
  daftarCutiTodayResult,
  daftarCutiTodayError,
}) => {
  console.log(daftarCutiTodayResult);
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        {daftarCutiTodayResult ? (
          Object.keys(daftarCutiTodayResult).map(key => {
            
            return (
              <CardDaftarCuti
                statusPengajuan={daftarCutiTodayResult[key]}
                key={key}
                id={key}
              />
            );
          })
        ) : daftarCutiTodayLoading ? (
          <View style={styles.loading}>
            <ActivityIndicator color={colors.primary} />
          </View>
        ) : daftarCutiTodayError ? (
          <Text>{daftarCutiTodayError}</Text>
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
