<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ChatMessage extends Model
{
    protected $with = [
        'from'
    ];

    protected $fillable = [
      'message',
      'chat_participant_id'
    ];

    public function from() {
        return $this->belongsTo(ChatParticipant::class, 'chat_participant_id');
    }
}
