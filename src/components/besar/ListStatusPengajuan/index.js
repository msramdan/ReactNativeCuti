import React from 'react';
import {ActivityIndicator, StyleSheet, Text, View, ScrollView} from 'react-native';
import {colors} from '../../../utils';
import {CardKeranjang} from '../../kecil';

const ListStatusPengajuan = ({
  getListPengajuanLoading,
  getListPengajuanResult,
  getListPengajuanError,
}) => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        {getListPengajuanResult ? (
          Object.keys(getListPengajuanResult.pesanans).map((key) => {
            return (
              <CardKeranjang
                keranjang={getListPengajuanResult.pesanans[key]}
                keranjangUtama={getListPengajuanResult}
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
export default ListStatusPengajuan;

const styles = StyleSheet.create({
    container: {
        marginVertical: 10
    }
});
