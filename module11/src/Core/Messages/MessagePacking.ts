export class MessagePacking {
  static unpackServerDtoToPm = (dto: any) => {
    return { success: dto.success, serverMessage: dto.result.message };
  };
}
