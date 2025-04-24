from django.shortcuts import render
from random import uniform
import math

def home(request):
    # Lista de criptomoedas e seus endereços
    crypto_data = [
        {'image': 'bitcoin.jpg', 'wallet': '0x6a23069386dbf659c2167052b905a079902e99ce'},
        {'image': 'ethereum.jpg', 'wallet': '0x6a23069386dbf659c2167052b905a079902e99ce'},
        {'image': 'binance.jpg', 'wallet': '0x6a23069386dbf659c2167052b905a079902e99ce'},
        {'image': 'ripple.jpg', 'wallet': ''},
        {'image': 'cardano.jpg', 'wallet': '0x6a23069386dbf659c2167052b905a079902e99ce'},
        {'image': 'render.jpg', 'wallet': ''},
        {'image': 'solana.jpg', 'wallet': '0x6a23069386dbf659c2167052b905a079902e99ce'},
        {'image': 'polkadot.jpg', 'wallet': '0x6a23069386dbf659c2167052b905a079902e99ce'},
        {'image': 'dogecoin.jpg', 'wallet': '0x6a23069386dbf659c2167052b905a079902e99ce'},
        {'image': 'shiba.jpg', 'wallet': '0x6a23069386dbf659c2167052b905a079902e99ce'},
        {'image': 'tron.jpg', 'wallet': '0x6a23069386dbf659c2167052b905a079902e99ce'},
        {'image': 'avalanchecoin.jpg', 'wallet': '0x6a23069386dbf659c2167052b905a079902e99ce'},
        {'image': 'litecoin.jpg', 'wallet': '0x6a23069386dbf659c2167052b905a079902e99ce'},
        {'image': 'chainlink.jpg', 'wallet': '0x6a23069386dbf659c2167052b905a079902e99ce'},
        {'image': 'stellar.jpg', 'wallet': '0x6a23069386dbf659c2167052b905a079902e99ce'},
        {'image': 'monero.jpg', 'wallet': ''},
        {'image': 'vechain.jpg', 'wallet': '0x6a23069386dbf659c2167052b905a079902e99ce'},
        {'image': 'tether.jpg', 'wallet': '0x6a23069386dbf659c2167052b905a079902e99ce'},
        {'image': 'filecoin.jpg', 'wallet': '0x6a23069386dbf659c2167052b905a079902e99ce'},
        {'image': 'aave.jpg', 'wallet': '0x6a23069386dbf659c2167052b905a079902e99ce'},
        {'image': 'uniswapuni.jpg', 'wallet': '0x6a23069386dbf659c2167052b905a079902e99ce'},
        {'image': 'cosmos.jpg', 'wallet': '0x6a23069386dbf659c2167052b905a079902e99ce'},
        {'image': 'xrp.jpg', 'wallet': '0x6a23069386dbf659c2167052b905a079902e99ce'},
        {'image': 'usdc.jpg', 'wallet': '0x6a23069386dbf659c2167052b905a079902e99ce'},
        {'image': 'uno sed leo.jpg', 'wallet': ''},
        {'image': 'trump.jpg', 'wallet': ''},
        {'image': 'toncoin.jpg', 'wallet': ''},
        {'image': 'sui.jpg', 'wallet': ''},
        {'image': 'polygon.jpg', 'wallet': '0x6a23069386dbf659c2167052b905a079902e99ce'},
        {'image': 'pi.jpg', 'wallet': ''},
        {'image': 'pepe.jpg', 'wallet': '0x6a23069386dbf659c2167052b905a079902e99ce'},
        {'image': 'ondo.jpg', 'wallet': '0x6a23069386dbf659c2167052b905a079902e99ce'},
        {'image': 'okb.jpg', 'wallet': ''},
        {'image': 'near protocol.jpg', 'wallet': '0x6a23069386dbf659c2167052b905a079902e99ce'},
        {'image': 'mantle.jpg', 'wallet': ''},
        {'image': 'kaspa.jpg', 'wallet': ''},
        {'image': 'internet comput.jpg', 'wallet': ''},
        {'image': 'hyperliquid.jpg', 'wallet': ''},
        {'image': 'hedera.jpg', 'wallet': ''},
        {'image': 'gate token.jpg', 'wallet': ''},
        {'image': 'first digital usd.jpg', 'wallet': '0x6a23069386dbf659c2167052b905a079902e99ce'},
        {'image': 'ethereum classic.jpg', 'wallet': '0x6a23069386dbf659c2167052b905a079902e99ce'},
        {'image': 'ethena.jpg', 'wallet': ''},
        {'image': 'ethena usde.jpg', 'wallet': '0x6a23069386dbf659c2167052b905a079902e99ce'},
        {'image': 'dai.jpg', 'wallet': '0x6a23069386dbf659c2167052b905a079902e99ce'},
        {'image': 'cronos.jpg', 'wallet': ''},
        {'image': 'bittensor.jpg', 'wallet': ''},
        {'image': 'biticon cash.jpg', 'wallet': '0x6a23069386dbf659c2167052b905a079902e99ce'},
        {'image': 'bitget token.jpg', 'wallet': ''},
        {'image': 'aptos.jpg', 'wallet': ''},
        {'image': 'algorand.jpg', 'wallet': ''},
        # Adicione mais criptomoedas aqui...
    ]

    # Configuração do círculo
    circle_radius = 220
    center_x, center_y = 250, 250
    image_radius = 15  # Prevenção contra sobreposição

    positions = []

    for crypto in crypto_data:
        while True:
            # Gera posição aleatória dentro do círculo
            angle = uniform(0, 2 * math.pi)
            radius = uniform(0, circle_radius - image_radius)
            x = center_x + math.cos(angle) * radius
            y = center_y + math.sin(angle) * radius

            # Checa sobreposição
            overlap = False
            for pos in positions:
                distance = math.sqrt((x - pos['left'])**2 + (y - pos['top'])**2)
                if distance < image_radius * 2:  # Define distância mínima
                    overlap = True
                    break

            if not overlap:
                positions.append({'top': round(y), 'left': round(x)})
                break

    # Combina criptomoedas com posições
    combined_data = [
        {'image': crypto['image'], 'wallet': crypto['wallet'], 'position': pos}
        for crypto, pos in zip(crypto_data, positions)
    ]

    return render(request, 'index.html', {'combined_data': combined_data})













